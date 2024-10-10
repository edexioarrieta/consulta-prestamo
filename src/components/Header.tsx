import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Accicom</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">Nosotros</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contacto</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-100">Inicio</Link>
          <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-100">Nosotros</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;