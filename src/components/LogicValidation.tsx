import React, { useState, useEffect } from 'react';

interface LogicValidationProps {
  onValidated: () => void;
}

const LogicValidation: React.FC<LogicValidationProps> = ({ onValidated }) => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput === captcha) {
      if (acceptTerms) {
        onValidated();
      } else {
        alert('Por favor, acepta los términos y condiciones para continuar.');
      }
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        alert('Has excedido el número máximo de intentos. Serás redirigido a la página de inicio.');
        window.location.href = '/';
      } else {
        alert('Código incorrecto. Por favor, intenta nuevamente.');
        setUserInput('');
        generateCaptcha();
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Validación de seguridad</h2>
      <p className="text-lg mb-4">Tenemos preparada una oferta para ti</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
            Ingresa los siguientes caracteres: <span className="font-bold">{captcha}</span>
          </label>
          <input
            type="text"
            id="captcha"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
            <span className="ml-2 text-sm text-gray-600">Acepto los términos y condiciones y recibir comunicaciones por WhatsApp</span>
          </label>
        </div>
        <button type="submit" className="w-full btn btn-primary">
          Validar
        </button>
      </form>
    </div>
  );
};

export default LogicValidation;