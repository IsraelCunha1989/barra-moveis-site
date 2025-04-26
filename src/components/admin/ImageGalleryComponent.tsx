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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative bg-gray-100 rounded-md overflow-hidden">
              <img 
                src={image} 
                alt={`Imagem ${index + 1}`} 
                className="w-full h-32 object-cover"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                onClick={() => handleRemoveImage(index)}
                title="Remover imagem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
      
      {images.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">Nenhuma imagem adicionada</p>
      )}
    </div>
  );
}
