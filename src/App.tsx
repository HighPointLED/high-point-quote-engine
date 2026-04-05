import React, { useState } from 'react';
import './App.css';

function App() {
  // State management example
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    // Simulate fetching a quote (you'll replace this with your API call)
    const randomQuote = 'The only limit to our realization of tomorrow is our doubts of today.';
    setQuote(randomQuote);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Engine</h1>
        <button onClick={fetchQuote}>Get a Quote</button>
        <p>{quote}</p>
      </header>
    </div>
  );
}

export default App;