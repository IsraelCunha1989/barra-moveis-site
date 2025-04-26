import { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageGalleryComponent from './ImageGalleryComponent';

interface EditarCategoriaComponentProps {
  categoriaId?: number;
  isNew?: boolean;
}

export default function EditarCategoriaComponent({ categoriaId, isNew = false }: EditarCategoriaComponentProps) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    destaque: false,
    imagem: ''
  });
  
  // Buscar categoria se estiver editando
  useEffect(() => {
    if (!isNew && categoriaId) {
      const fetchCategoria = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const response = await fetch(`/api/categorias/${categoriaId}`);
          const data = await response.json();
          
          if (data.success) {
            setFormData({
              nome: data.categoria.nome,
              descricao: data.categoria.descricao,
              destaque: data.categoria.destaque,
              imagem: data.categoria.imagem
            });
          } else {
            setError(data.message || 'Erro ao buscar categoria');
          }
        } catch (error) {
          console.error('Erro ao buscar categoria:', error);
          setError('Erro ao buscar categoria. Tente novamente mais tarde.');
        } finally {
          setLoading(false);
        }
      };
      
      fetchCategoria();
    }
  }, [isNew, categoriaId]);
  
  // Manipulador de mudança nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    });
  };
  
  // Manipulador de mudança no checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  // Manipulador de mudança na imagem
  const handleImageUpload = (imageUrl: string) => {
    setFormData({
      ...formData,
      imagem: imageUrl
    });
  };
  
  // Manipulador de remoção da imagem
  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      imagem: ''
    });
  };
  
  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    
    try {
      const url = isNew 
        ? '/api/categorias' 
        : `/api/categorias/${categoriaId}`;
      
      const method = isNew ? 'POST' : 'PUT';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(data.message || (isNew ? 'Categoria criada com sucesso!' : 'Categoria atualizada com sucesso!'));
        
        if (isNew) {
          // Limpar formulário após criar nova categoria
          setFormData({
            nome: '',
            descricao: '',
            destaque: false,
            imagem: ''
          });
        }
      } else {
        setError(data.message || 'Erro ao salvar categoria');
      }
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
      setError('Erro ao salvar categoria. Tente novamente mais tarde.');
    } finally {
      setSaving(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>{success}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          {/* Nome da categoria */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da categoria *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite o nome da categoria"
            />
          </div>
          
          {/* Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite uma descrição para a categoria"
            ></textarea>
          </div>
          
          {/* Destaque */}
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="destaque"
                name="destaque"
                checked={formData.destaque}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="destaque" className="ml-2 block text-sm text-gray-900">
                Categoria em destaque
              </label>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Categorias em destaque são exibidas na página inicial do site.
            </p>
          </div>
          
          {/* Imagem */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Imagem da categoria
            </label>
            
            {formData.imagem ? (
              <div className="mt-2">
                <div className="relative bg-gray-100 h-48 w-48 rounded-md overflow-hidden">
                  <img 
                    src={formData.imagem} 
                    alt="Imagem da categoria" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    onClick={handleRemoveImage}
                    title="Remover imagem"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-1">
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      >
                        <span>Carregar imagem</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF até 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Link
            href="/admin/categorias"
            className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Salvando...
              </>
            ) : (
              isNew ? 'Salvar categoria' : 'Salvar alterações'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
