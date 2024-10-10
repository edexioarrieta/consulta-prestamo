import React, { useState, useEffect } from 'react';

interface Quote {
  id: string;
  cuil: string;
  phone: string;
  amount: number;
  term: number;
  status: string;
  createdAt: string;
}

const Backoffice: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch quotes from API
      fetchQuotes();
    }
  }, [isLoggedIn]);

  const fetchQuotes = () => {
    // This is a mock API call. In a real application, you would fetch data from your backend.
    const mockQuotes: Quote[] = [
      { id: 'QT123456', cuil: '20-12345678-9', phone: '1234567890', amount: 50000, term: 12, status: 'Pending', createdAt: '2023-04-15T10:30:00Z' },
      { id: 'QT234567', cuil: '27-23456789-0', phone: '2345678901', amount: 75000, term: 18, status: 'Approved', createdAt: '2023-04-14T14:45:00Z' },
      { id: 'QT345678', cuil: '23-34567890-1', phone: '3456789012', amount: 100000, term: 24, status: 'Rejected', createdAt: '2023-04-13T09:15:00Z' },
    ];
    setQuotes(mockQuotes);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login. In a real application, you would validate credentials against your backend.
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Backoffice Login</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Backoffice</h1>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">CUIL</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Term</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id} className="border-b">
                <td className="px-4 py-2">{quote.id}</td>
                <td className="px-4 py-2">{quote.cuil}</td>
                <td className="px-4 py-2">{quote.phone}</td>
                <td className="px-4 py-2">${quote.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{quote.term} months</td>
                <td className="px-4 py-2">{quote.status}</td>
                <td className="px-4 py-2">{new Date(quote.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backoffice;