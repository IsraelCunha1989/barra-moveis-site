import { NextRequest, NextResponse } from 'next/server';

export interface Context {
  env: any;
}

export function middleware(request: NextRequest) {
  // Verificar rotas administrativas
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    // Verificar cookie de autenticação
    const authToken = request.cookies.get('auth_token');
    
    if (!authToken) {
      // Redirecionar para página de login se não estiver autenticado
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
