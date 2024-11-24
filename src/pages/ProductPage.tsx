import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import SizeSelector from '../components/ui/SizeSelector';
import TypeSelector from '../components/ui/TypeSelector';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedType, setSelectedType] = useState('classic');

  const sizes = ['PP', 'P', 'M', 'G', 'GG', 'G1', 'G2', 'G3'];
  const types = [
    { id: 'classic', name: 'Classic', desc: '100% algodão' },
    { id: 'comfort', name: 'Confort', desc: '96% algodão 4% elastano' },
  ];

  const images = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={mainImage}
            alt="Product"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setMainImage(image)}
                className={`rounded-lg overflow-hidden ${
                  mainImage === image ? 'ring-2 ring-black' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Camiseta Personalizada</h1>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">R$ 79,90</p>
            <p className="text-gray-600">até 2x de R$ 39,95 sem juros</p>
          </div>

          <TypeSelector
            types={types}
            selectedType={selectedType}
            onChange={setSelectedType}
          />

          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            onChange={setSelectedSize}
          />

          <Button fullWidth>
            Comprar
          </Button>

          {/* Shipping Calculator */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Calcule o frete:</h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Digite seu CEP"
                className="flex-grow border rounded-lg px-4 py-2"
              />
              <Button variant="outline">
                Calcular
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;