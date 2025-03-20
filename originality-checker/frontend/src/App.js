import React, { useState } from 'react';
import Header from './components/Header';
import DetectionForm from './components/DetectionForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/originality-checker/backend/api/analyze.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze text');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('An error occurred while analyzing the text. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p className="font-medium">Error</p>
              <p>{error}</p>
            </div>
          )}
          
          <DetectionForm onSubmit={handleSubmit} loading={loading} />
          
          {loading && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-2 text-gray-600">Analyzing your text...</p>
            </div>
          )}
          
          {results && !loading && (
            <ResultDisplay results={results} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;