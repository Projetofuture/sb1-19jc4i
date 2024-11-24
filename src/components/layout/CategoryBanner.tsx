import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryBannerProps {
  title: string;
  image: string;
  link: string;
}

const CategoryBanner = ({ title, image, link }: CategoryBannerProps) => {
  return (
    <Link to={link} className="relative group">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="flex items-center justify-center">
              <span className="mr-2">Ver coleção</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBanner;