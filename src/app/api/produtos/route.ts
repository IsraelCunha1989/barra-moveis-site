import { NextRequest } from 'next/server';
import { db } from "../../../lib/db";
import { verifyAuth } from "../../../lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get('categoria');
    const destaque = searchParams.get('destaque');
    
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
      },
      {
        id: '3',
        nome: 'Cama Box Casal',
        categoria: '3',
        preco: 'R$ 1.699,00',
        estoque: 2,
        descricao: 'Cama box casal com colchão ortopédico',
        caracteristicas: 'Casal (138x188cm)\nColchão ortopédico\nBase box\nAltura: 58cm',
        destaque: false,
        imagens: ['/img/Camera_1745604327.707315.png']
      },
      {
        id: '4',
        nome: 'Armário de Cozinha',
        categoria: '4',
        preco: 'R$ 2.299,00',
        estoque: 1,
        descricao: 'Armário de cozinha completo com 8 portas e 4 gavetas',
        caracteristicas: '8 portas\n4 gavetas\nAcabamento em MDF\nPuxadores em alumínio',
        destaque: false,
        imagens: ['/img/Camera_1745605439.757379.png']
      }
    ];
    
    let produtosFiltrados = [...produtos];
    
    // Filtrar por categoria
    if (categoria) {
      produtosFiltrados = produtosFiltrados.filter(p => p.categoria === categoria);
    }
    
    // Filtrar por destaque
    if (destaque === 'true') {
      produtosFiltrados = produtosFiltrados.filter(p => p.destaque);
    }
    
    return new Response(
      JSON.stringify({ success: true, produtos: produtosFiltrados }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao buscar produtos' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(request: NextRequest) {
  // Verificar autenticação
  const auth = await verifyAuth(request);
  
  if (!auth.authenticated) {
    return new Response(
      JSON.stringify({ success: false, message: 'Não autorizado' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const data = await request.json();
    
    // Validar dados
    if (!data.nome || !data.categoria || !data.preco) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nome, categoria e preço são obrigatórios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Simulando criação no banco de dados para desenvolvimento
    const novoProduto = {
      id: Date.now().toString(),
      nome: data.nome,
      categoria: data.categoria,
      preco: data.preco,
      estoque: data.estoque || 0,
      descricao: data.descricao || '',
      caracteristicas: data.caracteristicas || '',
      destaque: data.destaque || false,
      imagens: data.imagens || []
    };
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Produto criado com sucesso',
        produto: novoProduto
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao criar produto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
