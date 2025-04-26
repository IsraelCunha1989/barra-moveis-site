import { NextRequest } from 'next/server';
import { db } from "../../../../lib/db";
import { verifyAuth } from "../../../../lib/auth";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const id = params.id;
    
    // Dados simulados para desenvolvimento
    const produtos = [
      {
        id: '1',
        nome: 'Sofá 3 Lugares',
        categoria: '1',
        preco: 'R$ 2.499,00',
        estoque: 5,
        descricao: 'Sofá confortável de 3 lugares com tecido suede',
        caracteristicas: '3 lugares\nTecido suede\nEstrutura de madeira\nPés de metal',
        destaque: true,
        imagens: ['/img/Camera_1745603212.82549.png', '/img/Camera_1745603622.712518.png']
      },
      {
        id: '2',
        nome: 'Mesa de Jantar',
        categoria: '2',
        preco: 'R$ 1.899,00',
        estoque: 3,
        descricao: 'Mesa de jantar para 6 pessoas com tampo de vidro',
        caracteristicas: 'Para 6 pessoas\nTampo de vidro\nEstrutura de madeira\nDimensões: 160x90cm',
        destaque: true,
        imagens: ['/img/Camera_1745603819.333027.png', '/img/Camera_1745603941.788338.png']
      }
    ];
    
    const produto = produtos.find(p => p.id === id);
    
    if (!produto) {
      return new Response(
        JSON.stringify({ success: false, message: 'Produto não encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    return new Response(
      JSON.stringify({ success: true, produto }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao buscar produto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  // Verificar autenticação
  const auth = await verifyAuth(request);
  
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ success: false, message: 'Não autorizado' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const id = params.id;
    const data = await request.json();
    
    // Validar dados
    if (!data.nome || !data.categoria || !data.preco) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nome, categoria e preço são obrigatórios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Simulando atualização no banco de dados para desenvolvimento
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Produto atualizado com sucesso',
        produto: {
          id,
          nome: data.nome,
          categoria: data.categoria,
          preco: data.preco,
          estoque: data.estoque || 0,
          descricao: data.descricao || '',
          caracteristicas: data.caracteristicas || '',
          destaque: data.destaque || false,
          imagens: data.imagens || []
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao atualizar produto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  // Verificar autenticação
  const auth = await verifyAuth(request);
  
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ success: false, message: 'Não autorizado' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const id = params.id;
    
    // Simulando exclusão no banco de dados para desenvolvimento
    return new Response(
      JSON.stringify({ success: true, message: 'Produto excluído com sucesso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao excluir produto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
