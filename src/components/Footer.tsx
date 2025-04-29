import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Informações da empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">BARRA MÓVEIS</h3>
            <p className="text-gray-300 mb-4">
              Qualidade e estilo para sua casa desde 2010.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                R. Ângelo Rubini, 1062 - Barra do Rio Cerro, Jaraguá do Sul
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +55 47 99150-8265
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@barramoveis.com.br
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-white">
                {/* Ícone 1 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                {/* Ícone 2 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85..." />
                </svg>
              </a>
              <a href="https://wa.me/5547991508265" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {/* Ícone WhatsApp */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 9h às 19h</p>
              <p>Sábado: 9h às 17h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BARRA MÓVEIS - Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="/admin/login" passHref legacyBehavior>
              <a className="text-secondary hover:text-secondary-light">
                Área Administrativa
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

