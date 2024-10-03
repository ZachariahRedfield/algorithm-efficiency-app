import './App.css';
import React, { useState } from 'react';

function App() {
  // Define state for algorithm, dataSize, and the result
  const [algorithm, setAlgorithm] = useState('');
  const [dataSize, setDataSize] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make the POST request to the backend
    const response = await fetch('http://localhost:5000/compute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ algorithm, dataSize }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>Algorithm Efficiency Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Algorithm Name:</label>
          <input
            type="text"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            placeholder="e.g. Dijkstra"
            required
          />
        </div>

        <div>
          <label>Data Size:</label>
          <input
            type="number"
            value={dataSize}
            onChange={(e) => setDataSize(e.target.value)}
            placeholder="e.g. 1000"
            required
          />
        </div>

        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;

