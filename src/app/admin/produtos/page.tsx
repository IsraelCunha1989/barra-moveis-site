"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ListaProdutos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  
  // Buscar produtos e categorias ao carregar a página
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Buscar categorias
        const categoriasResponse = await fetch('/api/categorias');
        const categoriasData = await categoriasResponse.json();
        
        if (categoriasData.success) {
          setCategorias(categoriasData.categorias);
        }
        
        // Buscar produtos
        const produtosResponse = await fetch('/api/produtos');
        const produtosData = await produtosResponse.json();
        
        if (produtosData.success) {
          setProdutos(produtosData.produtos);
        } else {
          setError(produtosData.message || 'Erro ao buscar produtos');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao buscar dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Filtrar produtos por categoria
  const filtrarProdutos = () => {
    if (categoriaAtiva === 'todos') {
      return produtos;
    }
    
    return produtos.filter(produto => produto.categoria === categoriaAtiva);
  };
  
  // Manipulador de mudança de categoria
  const handleCategoriaChange = (categoria: string) => {
    setCategoriaAtiva(categoria);
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
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <Link
          href="/admin/produtos/novo"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Adicionar produto
        </Link>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {/* Filtro de categorias */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoriaChange('todos')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoriaAtiva === 'todos'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Todos
          </button>
          
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              onClick={() => handleCategoriaChange(categoria.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoriaAtiva === categoria.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </div>
      
      {/* Lista de produtos */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Produto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Categoria
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Preço
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Destaque
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtrarProdutos().length > 0 ? (
              filtrarProdutos().map(produto => {
                // Encontrar nome da categoria
                const categoria = categorias.find(cat => cat.id === produto.categoria);
                const categoriaNome = categoria ? categoria.nome : 'Sem categoria';
                
                return (
                  <tr key={produto.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {produto.imagens && produto.imagens.length > 0 ? (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={produto.imagens[0]}
                              alt={produto.nome}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <svg
                                className="h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{produto.nome}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{categoriaNome}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{produto.preco}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {produto.destaque ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Sim
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          Não
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/produtos/${produto.id}`}
                        className="text-primary hover:text-primary-dark"
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  Nenhum produto encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
