"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageBrowserComponent from '../../../components/admin/ImageBrowserComponent';

export default function ImagensPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  // Manipulador de seleção de imagem
  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setCopied(false);
  };
  
  // Manipulador de cópia de URL
  const handleCopyUrl = () => {
    if (selectedImage) {
      navigator.clipboard.writeText(selectedImage)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Erro ao copiar URL:', err);
        });
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Biblioteca de Imagens</h1>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              Selecione uma imagem para visualizar e copiar sua URL. Você pode usar essas URLs ao adicionar ou editar produtos.
            </p>
            
            <ImageBrowserComponent onSelectImage={handleSelectImage} selectedImage={selectedImage || undefined} />
          </div>
          
          {selectedImage && (
            <div className="mt-8 border rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-lg font-medium text-gray-900">Imagem selecionada</h3>
              </div>
              
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative h-64 w-full md:w-64 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={selectedImage}
                      alt="Imagem selecionada"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">URL da imagem</h4>
                    <div className="flex items-center mt-2">
                      <input
                        type="text"
                        value={selectedImage}
                        readOnly
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={handleCopyUrl}
                        className="ml-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        {copied ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Como usar</h4>
                      <p className="text-sm text-gray-500">
                        Copie esta URL e cole no campo de imagem ao adicionar ou editar produtos.
                        Você também pode usar esta URL diretamente em HTML ou CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
