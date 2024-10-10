import React from 'react';

interface LoanOfferProps {
  quoteNumber: string;
}

const LoanOffer: React.FC<LoanOfferProps> = ({ quoteNumber }) => {
  const loanAmount = 50000; // This would typically come from an API based on the user's profile
  const loanTerms = [6, 12, 18, 24]; // Available loan terms in months

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Tu oferta de préstamo</h2>
      <p className="text-lg mb-4">Número de cotización: {quoteNumber}</p>
      <p className="text-xl font-bold mb-4">Monto disponible: ${loanAmount.toLocaleString()}</p>
      <h3 className="text-lg font-semibold mb-2">Plazos disponibles:</h3>
      <ul className="list-disc list-inside mb-4">
        {loanTerms.map(term => (
          <li key={term}>{term} meses</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-4">Un asesor te indicará el detalle y montos de las cuotas.</p>
      <a
        href={`https://wa.me/3513486125?text=Hola, quiero finalizar mi cotización ${quoteNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full btn btn-primary block text-center"
      >
        Finalizar solicitud por WhatsApp
      </a>
    </div>
  );
};

export default LoanOffer;