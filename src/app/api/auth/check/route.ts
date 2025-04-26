import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token');
    
    if (!token) {
      return new Response(
        JSON.stringify({ authenticated: false, user: null }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Simulação de verificação de token para desenvolvimento
    return new Response(
      JSON.stringify({ 
        authenticated: true, 
        user: { 
          id: '1', 
          username: 'admin', 
          role: 'admin' 
        } 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    return new Response(
      JSON.stringify({ authenticated: false, user: null, error: 'Erro ao verificar autenticação' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
