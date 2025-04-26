"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Produtos() {
  // Estado para filtro de categorias
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [produtos, setProdutos] = useState([
    { 
      id: '1', 
      nome: 'Sofá 3 Lugares', 
      categoria: 'sala', 
      preco: 'R$ 1.999,00',
      imagem: '/img/produtos/sofa1.jpg',
      destaque: true
    },
    { 
      id: '2', 
      nome: 'Mesa de Jantar', 
      categoria: 'cozinha', 
      preco: 'R$ 1.499,00',
      imagem: '/img/produtos/mesa1.jpg',
      destaque: true
    },
    { 
      id: '3', 
      nome: 'Cama Box Casal', 
      categoria: 'quarto', 
      preco: 'R$ 2.299,00',
      imagem: '/img/produtos/cama1.jpg',
      destaque: false
    },
    { 
      id: '4', 
      nome: 'Guarda-roupa 6 Portas', 
      categoria: 'quarto', 
      preco: 'R$ 1.899,00',
      imagem: '/img/produtos/guarda-roupa1.jpg',
      destaque: true
    },
    { 
      id: '5', 
      nome: 'Rack para TV', 
      categoria: 'sala', 
      preco: 'R$ 899,00',
      imagem: '/img/produtos/rack1.jpg',
      destaque: false
    },
    { 
      id: '6', 
      nome: 'Escrivaninha', 
      categoria: 'escritorio', 
      preco: 'R$ 699,00',
      imagem: '/img/produtos/escrivaninha1.jpg',
      destaque: false
    }
  ]);
  
  const categorias = [
    { id: 'todos', nome: 'Todos os produtos' },
    { id: 'sala', nome: 'Sala' },
    { id: 'quarto', nome: 'Quarto' },
    { id: 'cozinha', nome: 'Cozinha' },
    { id: 'escritorio', nome: 'Escritório' }
  ];
  
  // Filtrar produtos por categoria
  const produtosFiltrados = categoriaAtiva === 'todos'
    ? produtos
    : produtos.filter(produto => produto.categoria === categoriaAtiva);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cabeçalho da página */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">Nossos Produtos</h1>
          <p className="mt-2 text-lg text-center">Conheça nossa linha completa de móveis para sua casa</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtro de categorias */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  categoriaAtiva === categoria.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
        
        {/* Lista de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map((produto) => (
            <Link
              key={produto.id}
              href={`/produtos/${produto.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={produto.imagem || '/img/placeholder.jpg'}
                  alt={produto.nome}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{produto.nome}</h3>
                <p className="mt-1 text-xl font-bold text-primary">{produto.preco}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500 capitalize">
                    {categorias.find(cat => cat.id === produto.categoria)?.nome || produto.categoria}
                  </span>
                  {produto.destaque && (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {produtosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
