"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageBrowserComponentProps {
  onSelectImage: (imageUrl: string) => void;
  selectedImage?: string;
}

interface ImageType {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: string;
}

export default function ImageBrowserComponent({ onSelectImage, selectedImage }: ImageBrowserComponentProps) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Buscar imagens ao carregar o componente
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/upload');
        const data = await response.json();
        
        if (data.success) {
          setImages(data.images);
        } else {
          setError(data.message || 'Erro ao buscar imagens');
        }
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        setError('Erro ao buscar imagens. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, []);
  
  // Manipulador de seleção de arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  // Manipulador de upload de arquivo
  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setUploading(true);
    setUploadProgress(0);
    setError(null);
    
    // Simular progresso de upload
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Adicionar nova imagem à lista
        setImages((prev) => [data.image, ...prev]);
        setSelectedFile(null);
        
        // Limpar input de arquivo
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setError(data.message || 'Erro ao enviar imagem');
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
      setError('Erro ao enviar imagem. Tente novamente mais tarde.');
    } finally {
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      // Simular conclusão do upload
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
      }, 500);
    }
  };
  
  // Manipulador de seleção de imagem
  const handleSelectImage = (imageUrl: string) => {
    onSelectImage(imageUrl);
  };
  
  // Formatar tamanho do arquivo
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {/* Upload de imagem */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <label className="block">
            <span className="sr-only">Escolher arquivo</span>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-gray-100 file:text-gray-700
                hover:file:bg-gray-200
              "
            />
          </label>
          
          <button
            type="button"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
        
        {/* Barra de progresso */}
        {uploading && (
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{uploadProgress}% concluído</p>
          </div>
        )}
      </div>
      
      {/* Lista de imagens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => handleSelectImage(image.url)}
            className={`relative border rounded-md overflow-hidden cursor-pointer transition-all ${
              selectedImage === image.url
                ? 'ring-2 ring-primary border-primary'
                : 'hover:border-gray-300'
            }`}
          >
            <div className="relative pt-[100%]">
              <Image
                src={image.url}
                alt={image.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 bg-white text-xs">
              <p className="truncate font-medium">{image.name}</p>
              <p className="text-gray-500">{formatFileSize(image.size)}</p>
            </div>
          </div>
        ))}
        
        {images.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <p className="mt-2">Nenhuma imagem encontrada</p>
            <p>Faça upload de imagens para começar</p>
          </div>
        )}
      </div>
    </div>
  );
}
