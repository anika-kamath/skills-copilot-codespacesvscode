//create web server

import express from 'express';
const app = express();
const port = 3000;

// Set up a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


//create a web server


