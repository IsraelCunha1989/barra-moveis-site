import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Simulação de dados para exportação estática
    return NextResponse.json({
      success: true,
      categoria: {
        id: params.id,
        nome: 'Categoria de exemplo',
        descricao: 'Descrição da categoria'
      }
    });
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao buscar categoria' 
    }, { status: 500 });
  }
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
