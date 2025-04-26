import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createAuthToken } from '../../../lib/auth';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { username, password } = data;
    
    // Verificar credenciais (simulado para desenvolvimento)
    if (username === 'admin' && password === 'admin123') {
      // Criar token de autenticação
      const token = await createAuthToken({ 
        id: '1', 
        username: 'admin',
        role: 'admin'
      });
      
      // Definir cookie de autenticação
      cookies().set({
        name: 'auth_token',
        value: token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 7 dias
      });
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Login realizado com sucesso',
          user: { username: 'admin', role: 'admin' }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: 'Credenciais inválidas' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao fazer login' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
