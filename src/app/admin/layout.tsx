"use client";

import { useState } from 'react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra superior */}
      <div className="bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin" className="text-xl font-bold">
                  Barra Móveis Admin
                </Link>
              </div>
            </div>
            
            <div className="flex items-center">
              <Link
                href="/admin/configuracoes"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-dark"
              >
                Configurações
              </Link>
              <Link
                href="/api/logout"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-primary-dark"
              >
                Sair
              </Link>
              <button
                type="button"
                className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-dark focus:outline-none"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Abrir menu</span>
                <svg
                  className={`${sidebarOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${sidebarOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex">
        {/* Barra lateral */}
        <div
          className={`${
            sidebarOpen ? 'block' : 'hidden'
          } md:block md:w-64 bg-white shadow-md`}
        >
          <div className="h-full">
            <nav className="mt-5 px-2 space-y-1">
              <Link
                href="/admin"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>
              
              <Link
                href="/admin/produtos"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Produtos
              </Link>
              
              <Link
                href="/admin/categorias"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                Categorias
              </Link>
              
              <Link
                href="/admin/imagens"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Imagens
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/"
                  target="_blank"
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Ver site
                </Link>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Conteúdo principal */}
        <div className="flex-1 p-6">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
