import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      authenticated: true,
      message: 'Usuário autenticado' 
    });
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    return NextResponse.json({ 
      success: false, 
      authenticated: false,
      message: 'Erro ao verificar autenticação' 
    }, { status: 500 });
  }
}
