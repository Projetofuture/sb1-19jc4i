import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              STONED
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/masculino" className="hover:text-gray-600">
              Masculino
            </Link>
            <Link to="/category/feminino" className="hover:text-gray-600">
              Feminino
            </Link>
            <Link to="/lancamentos" className="hover:text-gray-600">
              Lançamentos
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search size={24} />
            </button>
            <Link to="/cart" className="p-2 relative">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/category/masculino"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Masculino
            </Link>
            <Link
              to="/category/feminino"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Feminino
            </Link>
            <Link
              to="/lancamentos"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Lançamentos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;