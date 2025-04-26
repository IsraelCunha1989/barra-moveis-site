"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProdutoDetalheProps {
  params: {
    id: string;
  };
}

export default function ProdutoDetalhe({ params }: ProdutoDetalheProps) {
  const { id } = params;
  
  // Estado para imagem ativa na galeria
  const [imagemAtiva, setImagemAtiva] = useState(0);
  
  // Dados simulados para desenvolvimento
  const produto = {
    id: id,
    nome: 'Sofá 3 Lugares',
    categoria: '1',
    preco: 'R$ 2.499,00',
    estoque: 5,
    descricao: 'Sofá confortável de 3 lugares com tecido suede. Perfeito para sua sala de estar, com design moderno e acabamento de alta qualidade. Estrutura em madeira maciça e pés em metal.',
    caracteristicas: '3 lugares\nTecido suede\nEstrutura de madeira\nPés de metal\nAlmofadas removíveis\nDimensões: 220x90x85cm (LxAxP)',
    destaque: true,
    imagens: ['/img/Camera_1745603212.82549.png', '/img/Camera_1745603622.712518.png', '/img/Camera_1745603819.333027.png']
  };
  
  // Produtos relacionados simulados
  const produtosRelacionados = [
    {
      id: '2',
      nome: 'Mesa de Jantar',
      categoria: '2',
      preco: 'R$ 1.899,00',
      imagem: '/img/Camera_1745603941.788338.png'
    },
    {
      id: '3',
      nome: 'Cama Box Casal',
      categoria: '3',
      preco: 'R$ 1.699,00',
      imagem: '/img/Camera_1745604327.707315.png'
    },
    {
      id: '4',
      nome: 'Armário de Cozinha',
      categoria: '4',
      preco: 'R$ 2.299,00',
      imagem: '/img/Camera_1745605439.757379.png'
    }
  ];
  
  // Converter características em array
  const caracteristicasArray = produto.caracteristicas.split('\n');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/produtos" className="text-primary hover:text-primary-dark">
          ← Voltar para produtos
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Galeria de imagens */}
        <div>
          <div className="relative h-96 w-full mb-4 bg-gray-100 rounded-lg overflow-hidden">
            {produto.imagens && produto.imagens.length > 0 ? (
              <Image
                src={produto.imagens[imagemAtiva]}
                alt={produto.nome}
                fill
                className="object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <svg
                  className="h-16 w-16 text-gray-400"
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
          
          {/* Miniaturas */}
          {produto.imagens && produto.imagens.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {produto.imagens.map((imagem, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtiva(index)}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden ${
                    index === imagemAtiva ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'
                  }`}
                >
                  <Image
                    src={imagem}
                    alt={`${produto.nome} - imagem ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Informações do produto */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{produto.nome}</h1>
          <p className="text-2xl font-semibold text-primary mb-4">{produto.preco}</p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Descrição</h2>
            <p className="text-gray-700">{produto.descricao}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Características</h2>
            <ul className="list-disc list-inside text-gray-700">
              {caracteristicasArray.map((caracteristica, index) => (
                <li key={index}>{caracteristica}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <a
              href="https://wa.me/5521999999999?text=Olá! Tenho interesse no produto: Sofá 3 Lugares"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 w-full md:w-auto"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Produtos relacionados */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Produtos relacionados</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosRelacionados.map((produto) => (
            <Link
              key={produto.id}
              href={`/produtos/${produto.id}`}
              className="group"
            >
              <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{produto.nome}</h3>
              <p className="text-primary font-semibold">{produto.preco}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
