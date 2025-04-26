import { useState } from 'react';

interface UploadImageComponentProps {
  onImageUpload: (imageUrl: string) => void;
  multiple?: boolean;
}

export default function UploadImageComponent({ onImageUpload, multiple = false }: UploadImageComponentProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);

        // Simular progresso de upload
        const uploadInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              clearInterval(uploadInterval);
              return 90;
            }
            return prev + 10;
          });
        }, 300);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        clearInterval(uploadInterval);
        setUploadProgress(100);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Erro ao fazer upload da imagem');
        }

        const data = await response.json();
        
        if (data.success) {
          onImageUpload(data.imagem.url);
          
          // Se não for múltiplo, parar após o primeiro upload
          if (!multiple) break;
        } else {
          throw new Error(data.message || 'Erro ao fazer upload da imagem');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer upload da imagem');
    } finally {
      setUploading(false);
      setUploadProgress(0);
      
      // Limpar o input de arquivo
      if (e.target.value) {
        e.target.value = '';
      }
    }
  };

  return (
    <div className="w-full">
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600 justify-center">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
            >
              <span>{multiple ? 'Carregar imagens' : 'Carregar imagem'}</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/jpeg,image/png,image/gif,image/webp"
                multiple={multiple}
                disabled={uploading}
              />
            </label>
            <p className="pl-1">ou arraste e solte</p>
          </div>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF até 10MB
          </p>
          
          {uploading && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Enviando... {uploadProgress}%</p>
            </div>
          )}
          
          {error && (
            <p className="text-xs text-red-500 mt-1">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
