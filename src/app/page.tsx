import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-neutral-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Móveis que transformam</h1>
              <p className="text-xl mb-8">Conforto e estilo para sua casa</p>
              <Link href="/produtos" className="btn btn-primary px-8 py-3 text-lg">
                Ver Produtos
              </Link>
            </div>
            <div className="hidden md:block">
              {/* Placeholder para imagem de destaque */}
              <div className="bg-gray-700 h-96 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossa História */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Placeholder para imagem */}
              <div className="bg-gray-200 h-80 rounded-lg"></div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-primary uppercase font-medium mb-2">Nossa História</div>
              <h2 className="text-3xl font-bold mb-6">Transformando sua casa com estilo</h2>
              <p className="text-gray-600 mb-6">
                Na Barra Móveis, oferecemos móveis que aliam design e funcionalidade.
                Nossa missão é transformar ambientes com peças de qualidade que refletem
                o estilo e personalidade dos nossos clientes.
              </p>
              <Link href="/sobre" className="text-primary font-medium hover:underline">
                Saiba mais sobre nós
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categorias em Destaque */}
      <section className="py-16 bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Categorias em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção de móveis para todos os ambientes da sua casa.
              Qualidade, conforto e estilo em cada peça.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Categoria 1 */}
            <div className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/produtos?categoria=sala" className="btn btn-primary">
                    Ver Produtos
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Sala</h3>
                <p className="text-gray-600">Conforto e elegância para sua sala de estar</p>
              </div>
            </div>
            
            {/* Categoria 2 */}
            <div className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/produtos?categoria=quarto" className="btn btn-primary">
                    Ver Produtos
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Quarto</h3>
                <p className="text-gray-600">Tranquilidade e aconchego para seu descanso</p>
              </div>
            </div>
            
            {/* Categoria 3 */}
            <div className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/produtos?categoria=cozinha" className="btn btn-primary">
                    Ver Produtos
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Cozinha</h3>
                <p className="text-gray-600">Funcionalidade e beleza para sua cozinha</p>
              </div>
            </div>
            
            {/* Categoria 4 */}
            <div className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/produtos?categoria=escritorio" className="btn btn-primary">
                    Ver Produtos
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Escritório</h3>
                <p className="text-gray-600">Produtividade e conforto para seu trabalho</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossos produtos mais vendidos e as novidades que acabaram de chegar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Produto 1 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Sofá retrátil e reclinável</h3>
                <p className="text-gray-600 mb-2">Conforto e estilo em um só sofá.</p>
                <p className="text-primary font-bold mb-4">R$ 2.499,00</p>
                <Link href="/produtos/1" className="btn btn-primary w-full">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Produto 2 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Mesa de jantar redonda</h3>
                <p className="text-gray-600 mb-2">Ideal para refeições em família.</p>
                <p className="text-primary font-bold mb-4">R$ 1.899,00</p>
                <Link href="/produtos/2" className="btn btn-primary w-full">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Produto 3 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Rack para TV</h3>
                <p className="text-gray-600 mb-2">Praticidade e charme para sua sala.</p>
                <p className="text-primary font-bold mb-4">R$ 1.299,00</p>
                <Link href="/produtos/3" className="btn btn-primary w-full">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Produto 4 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="bg-gray-200 h-full w-full"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Cozinha 100% MDF</h3>
                <p className="text-gray-600 mb-2">Cozinha moderna e funcional.</p>
                <p className="text-primary font-bold mb-4">R$ 4.999,00</p>
                <Link href="/produtos/4" className="btn btn-primary w-full">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/produtos" className="btn btn-outline">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section className="py-16 bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Por que escolher a Barra Móveis?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Diferencial 1 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Todos os nossos produtos são fabricados com materiais de alta qualidade e passam por rigorosos controles.
              </p>
            </div>
            
            {/* Diferencial 2 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Entregamos em toda a região com rapidez e segurança para sua comodidade.
              </p>
            </div>
            
            {/* Diferencial 3 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Preços Competitivos</h3>
              <p className="text-gray-600">
                Oferecemos os melhores preços do mercado, com condições especiais de pagamento.
              </p>
            </div>
            
            {/* Diferencial 4 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Nossa equipe está pronta para oferecer um atendimento personalizado e ajudar você.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua casa hoje mesmo!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a transformar sua casa com móveis de qualidade e design exclusivo.
          </p>
          <Link href="/contato" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
            Fale Conosco
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
