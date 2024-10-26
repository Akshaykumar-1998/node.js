// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Sample GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Koyeb!' });
});

// Sample POST endpoint
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
