// call in the installed dependencies
import express from 'express';

// set up express
const app = express();

// set up port number
const port = 5035;

// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port);
