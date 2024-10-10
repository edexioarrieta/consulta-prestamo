import React, { useState } from 'react';
import LoanCalculator from '../components/LoanCalculator';
import IdentityVerification from '../components/IdentityVerification';
import LogicValidation from '../components/LogicValidation';
import LoanOffer from '../components/LoanOffer';
import ProgressBar from '../components/ProgressBar';

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

  const totalSteps = 4;

  const handleCalculatorSubmit = (data: string) => {
    setUserInput(data);
    setStep(2);
    // Here you would typically make an API call to validate the user and get their offers
  };

  const handleIdentityVerified = () => {
    setStep(3);
  };

  const handleLogicValidated = () => {
    setStep(4);
    // Generate a unique quote number
    setQuoteNumber(`QT${Date.now().toString().slice(-6)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Préstamos Personales</h1>
      
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      
      {step === 1 && <LoanCalculator onSubmit={handleCalculatorSubmit} />}
      {step === 2 && <IdentityVerification onVerified={handleIdentityVerified} />}
      {step === 3 && <LogicValidation onValidated={handleLogicValidated} />}
      {step === 4 && <LoanOffer quoteNumber={quoteNumber} />}
    </div>
  );
};

export default Home;