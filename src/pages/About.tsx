import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Sobre Accicom</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Accicom es una empresa líder en el sector de préstamos personales, comprometida con ofrecer soluciones financieras accesibles y transparentes a nuestros clientes.
        </p>
        <p className="mb-4">
          Nuestra misión es proporcionar préstamos personales de manera rápida y sencilla, adaptados a las necesidades individuales de cada cliente. Creemos en la importancia de la educación financiera y en empoderar a nuestros clientes para tomar decisiones informadas sobre su futuro financiero.
        </p>
        <p className="mb-4">
          Con años de experiencia en el mercado financiero, nuestro equipo de expertos está dedicado a brindar un servicio de calidad y asesoramiento personalizado a cada uno de nuestros clientes.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Nuestros valores</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Transparencia en todas nuestras operaciones</li>
          <li>Compromiso con la satisfacción del cliente</li>
          <li>Innovación constante en nuestros productos y servicios</li>
          <li>Responsabilidad social y ética en nuestras prácticas</li>
        </ul>
        <p>
          En Accicom, estamos aquí para ayudarte a alcanzar tus metas financieras. Confía en nosotros para obtener el préstamo personal que necesitas.
        </p>
      </div>
    </div>
  );
};

export default About;