import { useState, useEffect } from 'react';
import UploadImageComponent from './UploadImageComponent';

interface ImageGalleryComponentProps {
  initialImages?: string[];
  onImagesChange: (images: string[]) => void;
}

export default function ImageGalleryComponent({ initialImages = [], onImagesChange }: ImageGalleryComponentProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  
  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  const handleImageUpload = (imageUrl: string) => {
    const newImages = [...images, imageUrl];
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    onImagesChange(newImages);
  };

  return (
    <div>
      <div className="mb-4">
        <UploadImageComponent onImageUpload={handleImageUpload} multiple={true} />
      </div>
      
      {images.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700">Fotos do produto ({images.length})</h4>
            <p className="text-xs text-gray-500">Clique em uma imagem para visualizá-la em tamanho maior</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {images.map((image, index) => (
              <div key={index} className="relative bg-gray-100 rounded-md overflow-hidden group">
                <a 
                  href={image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={image} 
                    alt={`Imagem ${index + 1}`} 
                    className="w-full h-32 object-cover group-hover:opacity-90 transition-opacity"
                  />
                </a>
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button
                    type="button"
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    onClick={() => handleRemoveImage(index)}
                    title="Remover imagem"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {images.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">Nenhuma imagem adicionada</p>
      )}
    </div>
  );
}
