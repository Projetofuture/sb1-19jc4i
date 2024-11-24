import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  installments?: number;
}

const ProductCard = ({ id, name, price, image, installments = 2 }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic
          }}
        >
          <Heart size={20} />
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        <div>
          <p className="font-semibold">R$ {price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">
            ou {installments}x de R$ {(price / installments).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};