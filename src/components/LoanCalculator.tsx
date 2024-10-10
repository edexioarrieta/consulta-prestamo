import React, { useState } from 'react';

interface LoanCalculatorProps {
  onSubmit: (data: string) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Cotiza tu préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="input" className="block text-sm font-medium text-gray-700">CUIL o Teléfono</label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
            placeholder="Ingresa tu CUIL o teléfono"
          />
        </div>
        <button type="submit" className="w-full btn btn-primary">
          Cotizar
        </button>
      </form>
    </div>
  );
};

export default LoanCalculator;