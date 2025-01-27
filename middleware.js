import { NextResponse } from 'next/server';

export function middleware(request) {
  // Pega a URL atual
  const url = new URL(request.url);
  
  // Verifica se é uma rota de projeto
  if (url.pathname.includes('/portfolio/')) {
    // Verifica se é um refresh (F5)
    const isRefresh = request.headers.get('cache-control')?.includes('no-cache');
    
    if (isRefresh) {
      // Adiciona ou atualiza um parâmetro de timestamp na URL
      url.searchParams.set('_t', Date.now().toString());
      
      // Redireciona para a mesma URL mas com o novo parâmetro
      return NextResponse.redirect(url);
    }
  }
  
  // Se não for refresh ou não for rota de projeto, continua normalmente
  return NextResponse.next();
}

// Configura em quais rotas o middleware vai rodar
export const config = {
  matcher: '/portfolio/:path*'
}