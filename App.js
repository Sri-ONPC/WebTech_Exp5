const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse POST request body
app.use(bodyParser.urlencoded({ extended: false }));

// Route to display the login page (GET)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Route to handle login (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation logic
  if (username === 'Sribharathi' && password === '1234') {
    res.send(`<h2>Welcome, ${username}!</h2>`);
  } else {
    res.send('<h2>Invalid credentials. Please try again.</h2>');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
