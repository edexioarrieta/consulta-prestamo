import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Accicom</h3>
            <p className="text-sm">Préstamos personales a tu medida</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-blue-300">Inicio</a></li>
              <li><a href="/about" className="hover:text-blue-300">Nosotros</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <p className="text-sm">Email: info@accicom.com</p>
            <p className="text-sm">Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Accicom. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;