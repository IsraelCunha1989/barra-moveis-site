/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pub-barra-moveis-images.r2.dev', 'pub-barra-moveis-images-preview.r2.dev'],
    unoptimized: true,
  },
  // output: 'export', // Removido para permitir rotas de API dinâmicas
  trailingSlash: true,
}

module.exports = nextConfig
