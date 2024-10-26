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

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { name, email, number } = req.body;

  // Here you would typically save the user data to a database

  // Respond with the received data (or you can respond with a success message)
  res.json({
    message: 'Registration successful!',
    user: {
      name,
      email,
      number
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Production URL: https://unable-merrile-akshay1518-f99668a8.koyeb.app`);
});
