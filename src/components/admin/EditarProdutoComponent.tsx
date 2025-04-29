import { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageGalleryComponent from './ImageGalleryComponent';

interface EditarProdutoComponentProps {
  produtoId?: number;
  isNew?: boolean;
}

export default function EditarProdutoComponent({ produtoId, isNew = false }: EditarProdutoComponentProps) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [categorias, setCategorias] = useState([]);
  
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '',
    estoque: 0,
    descricao: '',
    caracteristicas: '',
    destaque: false,
    imagens: [] as string[]
  });
  
  // Buscar categorias
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('/api/categorias');
        const data = await response.json();
        
        if (data.success) {
          setCategorias(data.categorias);
        }
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };
    
    fetchCategorias();
  }, []);
  
  // Buscar produto se estiver editando
  useEffect(() => {
    if (!isNew && produtoId) {
      const fetchProduto = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const response = await fetch(`/api/produtos/${produtoId}`);
          const data = await response.json();
          
          if (data.success) {
            setFormData({
              nome: data.produto.nome,
              categoria: data.produto.categoria,
              preco: data.produto.preco,
              estoque: data.produto.estoque,
              descricao: data.produto.descricao,
              caracteristicas: data.produto.caracteristicas,
              destaque: data.produto.destaque,
              imagens: data.produto.imagens
            });
          } else {
            setError(data.message || 'Erro ao buscar produto');
          }
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
          setError('Erro ao buscar produto. Tente novamente mais tarde.');
        } finally {
          setLoading(false);
        }
      };
      
      fetchProduto();
    }
  }, [isNew, produtoId]);
  
  // Manipulador de mudança nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
  
  // Manipulador de mudança nas imagens
  const handleImagesChange = (images: string[]) => {
    setFormData({
      ...formData,
      imagens: images
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
        ? '/api/produtos' 
        : `/api/produtos/${produtoId}`;
      
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
        setSuccess(data.message || (isNew ? 'Produto criado com sucesso!' : 'Produto atualizado com sucesso!'));
        
        if (isNew) {
          // Limpar formulário após criar novo produto
          setFormData({
            nome: '',
            categoria: '',
            preco: '',
            estoque: 0,
            descricao: '',
            caracteristicas: '',
            destaque: false,
            imagens: []
          });
        }
      } else {
        setError(data.message || 'Erro ao salvar produto');
      }
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      setError('Erro ao salvar produto. Tente novamente mais tarde.');
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome do produto */}
          <div className="col-span-2">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do produto *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite o nome do produto"
            />
          </div>
          
          {/* Categoria */}
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
              Categoria *
            </label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria: any) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
          
          {/* Preço */}
          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
              Preço *
            </label>
            <input
              type="text"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="R$ 0,00"
            />
          </div>
          
          {/* Estoque */}
          <div>
            <label htmlFor="estoque" className="block text-sm font-medium text-gray-700 mb-1">
              Estoque
            </label>
            <input
              type="number"
              id="estoque"
              name="estoque"
              value={formData.estoque}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Quantidade em estoque"
            />
          </div>
          
          {/* Destaque */}
          <div>
            <div className="flex items-center h-full">
              <input
                type="checkbox"
                id="destaque"
                name="destaque"
                checked={formData.destaque}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="destaque" className="ml-2 block text-sm text-gray-900">
                Produto em destaque
              </label>
            </div>
          </div>
          
          {/* Descrição */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                Descrição *
              </label>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('descricao')?.focus();
                }}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Editar descrição
              </a>
            </div>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite a descrição detalhada do produto"
            ></textarea>
          </div>
          
          {/* Características */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="caracteristicas" className="block text-sm font-medium text-gray-700">
                Características
              </label>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('caracteristicas')?.focus();
                }}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Editar características
              </a>
            </div>
            <textarea
              id="caracteristicas"
              name="caracteristicas"
              value={formData.caracteristicas}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite as características do produto (uma por linha)"
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Digite uma característica por linha. Exemplo: "190cm de largura", "Tecido suede macio e resistente"
            </p>
          </div>
          
          {/* Imagens */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Imagens do produto
              </label>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('file-upload')?.click();
                }}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Adicionar novas fotos
              </a>
            </div>
            <ImageGalleryComponent 
              initialImages={formData.imagens} 
              onImagesChange={handleImagesChange} 
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Link
            href="/admin/produtos"
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
              isNew ? 'Salvar produto' : 'Salvar alterações'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
