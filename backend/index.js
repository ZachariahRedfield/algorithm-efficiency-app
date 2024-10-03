const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// API route for algorithm computation
app.post('/compute', (req, res) => {
  const { algorithm, dataSize } = req.body;
  const result = `Algorithm: ${algorithm}, Data Size: ${dataSize}`;
  res.json({ result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
