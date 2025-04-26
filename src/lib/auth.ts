import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET || 'barra-moveis-secret-key';

export async function verifyAuth(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');
  
  if (!token) {
    return { authenticated: false, user: null };
  }
  
  try {
    // Verificar token JWT
    const secretKey = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token.value, secretKey);
    
    return {
      authenticated: true,
      user: payload
    };
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return { authenticated: false, user: null };
  }
}

export async function createAuthToken(user: { id: string; username: string; role: string }) {
  const secretKey = new TextEncoder().encode(JWT_SECRET);
  
  // Criar token JWT
  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // 7 dias
    .setJti(uuidv4())
    .sign(secretKey);
  
  return token;
}
