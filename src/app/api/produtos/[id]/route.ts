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
      produto: {
        id: params.id,
        nome: 'Produto de exemplo',
        categoria: '1',
        preco: 'R$ 1.299,00',
        estoque: 10,
        descricao: 'Descrição detalhada do produto',
        caracteristicas: 'Características do produto',
        destaque: true,
        imagens: ['/images/produto1.jpg', '/images/produto2.jpg']
      }
    });
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao buscar produto' 
    }, { status: 500 });
  }
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
