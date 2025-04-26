import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Remover cookie de autenticação
    cookies().delete('auth_token');
    
    return new Response(
      JSON.stringify({ success: true, message: 'Logout realizado com sucesso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao fazer logout' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
