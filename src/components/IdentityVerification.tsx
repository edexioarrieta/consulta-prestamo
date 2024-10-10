import React, { useState } from 'react';

interface IdentityVerificationProps {
  onVerified: () => void;
}

const IdentityVerification: React.FC<IdentityVerificationProps> = ({ onVerified }) => {
  const [selectedName, setSelectedName] = useState('');
  const correctName = 'Juan Pérez'; // This would typically come from an API
  const fakeNames = ['María González', 'Carlos Rodríguez'];

  const handleNameSelection = (name: string) => {
    setSelectedName(name);
    if (name === correctName) {
      onVerified();
    } else {
      alert('No hemos podido validar tus datos, intenta nuevamente');
      window.location.href = '/'; // Redirect to home page
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Verifica tu identidad</h2>
      <p className="mb-4">Por favor, selecciona tu nombre correcto:</p>
      <div className="space-y-2">
        {[correctName, ...fakeNames].sort(() => Math.random() - 0.5).map((name) => (
          <button
            key={name}
            onClick={() => handleNameSelection(name)}
            className="w-full btn btn-secondary"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IdentityVerification;