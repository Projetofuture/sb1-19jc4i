import React from 'react';
import CategoryBanner from '../components/layout/CategoryBanner';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Camiseta Classic Preta',
      price: 79.90,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    },
    {
      id: 2,
      name: 'Camiseta Comfort Branca',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    },
    {
      id: 3,
      name: 'Camiseta Classic Cinza',
      price: 79.90,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    },
    {
      id: 4,
      name: 'Camiseta Comfort Azul',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative flex flex-col items-start justify-center h-full px-8 max-w-7xl mx-auto text-white">
          <h1 className="text-6xl font-bold mb-4">BAS QUE TE</h1>
          <p className="text-xl mb-8">NOVAS ESTAMPAS!</p>
          <Button variant="secondary">Ver agora!</Button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
            <p className="text-gray-600">Em compras acima de R$199</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Troca sem burocracia</h3>
            <p className="text-gray-600">Satisfação garantida</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Pagamento Seguro</h3>
            <p className="text-gray-600">Todas as formas de pagamento</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Destaques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryBanner
            title="MASCULINO"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
            link="/category/masculino"
          />
          <CategoryBanner
            title="FEMININO"
            image="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95"
            link="/category/feminino"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;