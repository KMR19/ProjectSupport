// call in the installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// connect to mongoose
mongoose.connect('mongodb://localhost/projectsupport')
  .then(() => {
    console.log('database connected.');
  })
  .catch(() => {
  });
mongoose.Promise = global.Promise;

// set up port number
const port = 5035;

// set up route
app.use('/api/', mainRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
