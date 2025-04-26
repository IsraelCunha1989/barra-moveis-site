import { NextRequest } from 'next/server';
import { db } from "../../../lib/db";
import { verifyAuth } from "../../../lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // Dados simulados para desenvolvimento
    const categorias = [
      {
        id: '1',
        nome: 'Sofás',
        descricao: 'Sofás confortáveis para sua sala',
        destaque: true,
        imagem: '/uploads/sofa1.jpg'
      },
      {
        id: '2',
        nome: 'Mesas',
        descricao: 'Mesas para sala de jantar e escritório',
        destaque: true,
        imagem: '/uploads/mesa1.jpg'
      },
      {
        id: '3',
        nome: 'Camas',
        descricao: 'Camas confortáveis para seu quarto',
        destaque: false,
        imagem: '/uploads/cama1.jpg'
      },
      {
        id: '4',
        nome: 'Armários',
        descricao: 'Armários para quarto e cozinha',
        destaque: false,
        imagem: '/uploads/armario1.jpg'
      }
    ];
    
    if (id) {
      const categoria = categorias.find(cat => cat.id === id);
      
      if (!categoria) {
        return new Response(
          JSON.stringify({ success: false, message: 'Categoria não encontrada' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ success: true, categoria }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    return new Response(
      JSON.stringify({ success: true, categorias }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao buscar categorias' }),
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
    if (!data.nome) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nome é obrigatório' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Simulando criação no banco de dados para desenvolvimento
    const novaCategoria = {
      id: Date.now().toString(),
      nome: data.nome,
      descricao: data.descricao || '',
      destaque: data.destaque || false,
      imagem: data.imagem || ''
    };
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Categoria criada com sucesso',
        categoria: novaCategoria
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao criar categoria' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
