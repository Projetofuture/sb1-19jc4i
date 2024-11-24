import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MessageSquare, User, Package, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="grid grid-cols-5 gap-1">
          <Link
            to="/"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-black"
          >
            <Home size={20} />
            <span className="text-xs">Inicio</span>
          </Link>
          <Link
            to="/contato"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-black"
          >
            <MessageSquare size={20} />
            <span className="text-xs">Contato</span>
          </Link>
          <Link
            to="/conta"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-black"
          >
            <User size={20} />
            <span className="text-xs">Conta</span>
          </Link>
          <Link
            to="/pedidos"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-black"
          >
            <Package size={20} />
            <span className="text-xs">Pedidos</span>
          </Link>
          <Link
            to="/buscar"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-black"
          >
            <Search size={20} />
            <span className="text-xs">Buscar</span>
          </Link>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Sobre a STONED</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/sobre" className="hover:text-gray-300">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link to="/lojas" className="hover:text-gray-300">
                    Nossas Lojas
                  </Link>
                </li>
                <li>
                  <Link to="/trabalhe-conosco" className="hover:text-gray-300">
                    Trabalhe Conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ajuda</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/trocas" className="hover:text-gray-300">
                    Trocas e Devoluções
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/fale-conosco" className="hover:text-gray-300">
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Políticas</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacidade" className="hover:text-gray-300">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/termos" className="hover:text-gray-300">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="mb-4">
                Receba novidades e promoções exclusivas no seu e-mail
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-grow px-4 py-2 rounded-lg text-black"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2024 STONED. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;