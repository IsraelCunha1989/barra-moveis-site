"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EditarCategoriaProps {
  params: {
    id: string;
  };
}

export default function EditarCategoria({ params }: EditarCategoriaProps) {
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
  
  // Buscar categoria ao carregar a página
  useEffect(() => {
    const fetchCategoria = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/categorias/${params.id}`);
        const data = await response.json();
        
        if (data.success) {
          setFormData({
            nome: data.categoria.nome,
            descricao: data.categoria.descricao || '',
            destaque: Boolean(data.categoria.destaque),
            imagem: data.categoria.imagem || ''
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
  }, [params.id]);
  
  // Manipulador de mudança nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
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
  const handleImageChange = (imageUrl: string) => {
    setFormData({
      ...formData,
      imagem: imageUrl
    });
  };
  
  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch(`/api/categorias/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess('Categoria atualizada com sucesso!');
      } else {
        setError(data.message || 'Erro ao atualizar categoria');
      }
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      setError('Erro ao atualizar categoria. Tente novamente mais tarde.');
    } finally {
      setSaving(false);
    }
  };
  
  // Manipulador de exclusão
  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja excluir esta categoria? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    setSaving(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch(`/api/categorias/${params.id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess('Categoria excluída com sucesso!');
        // Redirecionar após exclusão
        window.location.href = '/admin/categorias';
      } else {
        setError(data.message || 'Erro ao excluir categoria');
      }
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      setError('Erro ao excluir categoria. Tente novamente mais tarde.');
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Editar Categoria</h1>
        <Link
          href="/admin/categorias"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Voltar
        </Link>
      </div>
      
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
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
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
                  rows={3}
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
                <p className="mt-1 text-xs text-gray-500">
                  Categorias em destaque são exibidas na página inicial
                </p>
              </div>
              
              {/* Imagem */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Imagem da categoria
                </label>
                
                {formData.imagem && (
                  <div className="mt-2 mb-4">
                    <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={formData.imagem} 
                        alt={formData.nome} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="mt-1">
                  <button
                    type="button"
                    onClick={() => window.location.href = '/admin/imagens'}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Gerenciar imagens
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Acesse a biblioteca de imagens para selecionar uma imagem para a categoria
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={saving}
              >
                {saving ? 'Processando...' : 'Excluir categoria'}
              </button>
              
              <div>
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
                    'Salvar alterações'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
