import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Informações da empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">BARRA MÓVEIS</h3>
            <p className="text-gray-300 mb-4">Qualidade e estilo para sua casa desde 2010.</p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>Rua: Angelo Rubini 1062, Barra do Rio Cerro - Jaraguá do Sul</p>
              <p>(55) 47 99150-8265</p>
              <p>contato@barramoveis.com.br</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/valdirmoveisbarra"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85...Z" />
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BARRA MÓVEIS - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
