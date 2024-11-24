import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Camiseta Classic',
      price: 79.90,
      size: 'M',
      type: 'Classic (100% algodão)',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrinho</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Tamanho: {item.size}</p>
                <p className="text-gray-600">{item.type}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete</span>
                <span>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ou 2x de R$ {(total / 2).toFixed(2)} sem juros
                </p>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-900 transition">
              Finalizar Compra
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;