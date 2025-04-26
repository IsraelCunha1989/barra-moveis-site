import { NextRequest } from 'next/server';
import { join } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { verifyAuth } from "../../../lib/auth";

// Diretório para upload de imagens
const uploadDir = join(process.cwd(), 'public', 'uploads');

export async function GET(request: NextRequest) {
  try {
    // Listar imagens do diretório de uploads (simulado para desenvolvimento)
    const images = [
      {
        id: '1',
        name: 'sofa1.jpg',
        url: '/uploads/sofa1.jpg',
        size: 1024 * 1024 * 2.5, // 2.5MB
        type: 'image/jpeg',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'mesa1.jpg',
        url: '/uploads/mesa1.jpg',
        size: 1024 * 1024 * 1.8, // 1.8MB
        type: 'image/jpeg',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        name: 'cama1.jpg',
        url: '/uploads/cama1.jpg',
        size: 1024 * 1024 * 2.1, // 2.1MB
        type: 'image/jpeg',
        createdAt: new Date().toISOString()
      }
    ];
    
    return new Response(
      JSON.stringify({ success: true, images }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao listar imagens:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao listar imagens' }),
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
    // Simulando upload de imagem para desenvolvimento
    const imageId = uuidv4();
    const imageName = `image_${imageId}.jpg`;
    const imageUrl = `/uploads/${imageName}`;
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Imagem enviada com sucesso',
        image: {
          id: imageId,
          name: imageName,
          url: imageUrl,
          size: 1024 * 1024 * 2, // 2MB
          type: 'image/jpeg',
          createdAt: new Date().toISOString()
        }
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao enviar imagem:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao enviar imagem' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
