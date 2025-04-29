"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" passHref legacyBehavior>
                <a className="text-2xl font-bold text-primary">
                  Barra Móveis
                </a>
              </Link>
            </div>

            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" passHref legacyBehavior>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-primary hover:border-primary">
                  Início
                </a>
              </Link>

              <Link href="/produtos" passHref legacyBehavior>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-primary hover:border-primary">
                  Produtos
                </a>
              </Link>

              <Link href="/sobre" passHref legacyBehavior>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-primary hover:border-primary">
                  Sobre
                </a>
              </Link>

              <Link href="/contato" passHref legacyBehavior>
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-primary hover:border-primary">
                  Contato
                </a>
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center">
              <a
                href="https://wa.me/5547991508265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."
                  />
                </svg>
                Fale conosco
              </a>

              <Link href="/admin/login" passHref legacyBehavior>
                <a className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary border-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Editar Conteúdo
                </a>
              </Link>
            </div>

            {/* Botão menu mobile */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Abrir menu</span>

                {/* Ícone hamburguer */}
                {!mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" passHref legacyBehavior>
              <a
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary"
                onClick={toggleMobileMenu}
              >
                Início
              </a>
            </Link>

            <Link href="/produtos" passHref legacyBehavior>
              <a
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary"
                onClick={toggleMobileMenu}
              >
                Produtos
              </a>
            </Link>

            <Link href="/sobre" passHref legacyBehavior>
              <a
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary"
                onClick={toggleMobileMenu}
              >
                Sobre
              </a>
            </Link>

            <Link href="/contato" passHref legacyBehavior>
              <a
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary"
                onClick={toggleMobileMenu}
              >
                Contato
              </a>
            </Link>

            <a
              href="https://wa.me/5547991508265"
              target="_blank"
              rel="noopener noreferrer"
              className="block pl-3 pr-4 py-2 border-l-4 border-primary text-base font-medium text-primary bg-primary-light/20"
              onClick={toggleMobileMenu}
            >
              Fale conosco
            </a>

            <Link href="/admin/login" passHref legacyBehavior>
              <a
                className="block pl-3 pr-4 py-2 border-l-4 border-secondary text-base font-medium text-secondary bg-secondary-light/20"
                onClick={toggleMobileMenu}
              >
                Editar Conteúdo
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
