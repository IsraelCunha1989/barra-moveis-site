import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Simulação de dados para exportação estática
    return NextResponse.json({
      success: true,
      categorias: [
        {
          id: '1',
          nome: 'Sala',
          descricao: 'Móveis para sala de estar'
        },
        {
          id: '2',
          nome: 'Quarto',
          descricao: 'Móveis para quarto'
        },
        {
          id: '3',
          nome: 'Cozinha',
          descricao: 'Móveis para cozinha'
        }
      ]
    });
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao buscar categorias' 
    }, { status: 500 });
  }
}

export function generateStaticParams() {
  return [];
}
