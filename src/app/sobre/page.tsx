import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Sobre() {
  return (
    <main>
      <Header />
      
      {/* Banner da página */}
      <section className="bg-neutral-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Conheça a história da Barra Móveis e nossa missão de transformar ambientes com móveis de qualidade.
          </p>
        </div>
      </section>
      
      {/* Nossa História */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary uppercase font-medium mb-2">Nossa História</div>
              <h2 className="text-3xl font-bold mb-6">Tradição e qualidade desde 2010</h2>
              <p className="text-gray-600 mb-6">
                A Barra Móveis nasceu do sonho de oferecer móveis de qualidade com design moderno e preços acessíveis. 
                Desde 2010, temos trabalhado com dedicação para transformar casas em lares aconchegantes e cheios de personalidade.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa jornada começou com uma pequena loja na Barra da Tijuca, no Rio de Janeiro, e hoje somos 
                referência em móveis de qualidade para todos os ambientes. Nosso compromisso com a excelência 
                e a satisfação dos clientes nos permitiu crescer e conquistar a confiança de milhares de famílias.
              </p>
            </div>
            <div>
              {/* Placeholder para imagem */}
              <div className="bg-gray-200 h-80 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Missão, Visão e Valores</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Missão</h3>
              <p className="text-gray-600 text-center">
                Transformar ambientes com móveis de qualidade, design e funcionalidade, 
                proporcionando bem-estar e satisfação aos nossos clientes.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Visão</h3>
              <p className="text-gray-600 text-center">
                Ser reconhecida como referência em móveis de qualidade, 
                inovação e atendimento personalizado, expandindo nossa presença 
                e mantendo a excelência em tudo o que fazemos.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Qualidade em tudo o que fazemos
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compromisso com a satisfação do cliente
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inovação e criatividade
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ética e transparência
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsabilidade socioambiental
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem parte da Barra Móveis e trabalham 
              diariamente para oferecer o melhor atendimento e produtos de qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Israel Cunha</h3>
              <p className="text-primary">Estrategista de Varejo</p>
              <p className="text-gray-600 mt-2">
                Líder da operação comercial, com foco em resultados e rentabilidade.
              </p>
            </div>
            
            {/* Membro 2 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Ana Silva</h3>
              <p className="text-primary">Gerente de Loja</p>
              <p className="text-gray-600 mt-2">
                Responsável pela coordenação da equipe e garantia da qualidade no atendimento.
              </p>
            </div>
            
            {/* Membro 3 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Carlos Oliveira</h3>
              <p className="text-primary">Consultor de Vendas</p>
              <p className="text-gray-600 mt-2">
                Especialista em design de interiores, ajuda os clientes a encontrarem o móvel ideal.
              </p>
            </div>
            
            {/* Membro 4 */}
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Mariana Costa</h3>
              <p className="text-primary">Consultora de Vendas</p>
              <p className="text-gray-600 mt-2">
                Especialista em atendimento personalizado e soluções para todos os ambientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section className="py-16 bg-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossos Diferenciais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diferencial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Produtos de Alta Qualidade</h3>
                <p className="text-gray-600">
                  Trabalhamos apenas com materiais de primeira linha e fornecedores confiáveis, 
                  garantindo durabilidade e acabamento impecável em todos os nossos móveis.
                </p>
              </div>
            </div>
            
            {/* Diferencial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-600">
                  Nossa equipe de consultores está preparada para entender suas necessidades 
                  e oferecer soluções personalizadas para cada ambiente da sua casa.
                </p>
              </div>
            </div>
            
            {/* Diferencial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entrega e Montagem</h3>
                <p className="text-gray-600">
                  Oferecemos serviço de entrega rápida e montagem profissional, garantindo 
                  que seus móveis cheguem em perfeitas condições e sejam instalados corretamente.
                </p>
              </div>
            </div>
            
            {/* Diferencial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Condições Especiais</h3>
                <p className="text-gray-600">
                  Oferecemos os melhores preços do mercado e condições especiais de pagamento, 
                  para que você possa transformar sua casa sem comprometer seu orçamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Venha nos conhecer!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visite nossa loja e descubra como podemos transformar sua casa com móveis de qualidade e design exclusivo.
          </p>
          <Link href="/contato" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
            Entre em Contato
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
