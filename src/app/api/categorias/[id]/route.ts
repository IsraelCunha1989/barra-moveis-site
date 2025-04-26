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
    
    // Buscar categoria pelo ID
    // Simulando o resultado do banco de dados para desenvolvimento
    const categorias = [
      {
        id: id,
        nome: 'Sofás',
        descricao: 'Sofás confortáveis para sua sala',
        destaque: true,
        imagem: '/uploads/sofa1.jpg'
      }
    ];
    
    if (!categorias || categorias.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: 'Categoria não encontrada' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    const categoria = categorias[0];
    
    return new Response(
      JSON.stringify({ success: true, categoria }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao buscar categoria' }),
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
    if (!data.nome) {
      return new Response(
        JSON.stringify({ success: false, message: 'Nome é obrigatório' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Simulando atualização no banco de dados para desenvolvimento
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Categoria atualizada com sucesso',
        categoria: {
          id,
          nome: data.nome,
          descricao: data.descricao || '',
          destaque: data.destaque || false,
          imagem: data.imagem || ''
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao atualizar categoria' }),
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
      JSON.stringify({ success: true, message: 'Categoria excluída com sucesso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao excluir categoria' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
