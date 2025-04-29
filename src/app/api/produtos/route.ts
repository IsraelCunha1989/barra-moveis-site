import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Simulação de dados para exportação estática
    return NextResponse.json({
      success: true,
      produtos: [
        {
          id: '1',
          nome: 'Sofá 3 Lugares',
          categoria: '1',
          preco: 'R$ 1.299,00',
          estoque: 10,
          descricao: 'Sofá confortável para sua sala',
          destaque: true,
          imagens: ['/images/produto1.jpg']
        },
        {
          id: '2',
          nome: 'Mesa de Jantar',
          categoria: '2',
          preco: 'R$ 899,00',
          estoque: 5,
          descricao: 'Mesa elegante para sua sala de jantar',
          destaque: false,
          imagens: ['/images/produto2.jpg']
        }
      ]
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao buscar produtos' 
    }, { status: 500 });
  }
}

export function generateStaticParams() {
  return [];
}
