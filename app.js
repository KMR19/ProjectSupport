// call in the installed dependencies
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import homeRoute from './server/routes/index';
import mainRoutes from './server/routes/main';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
require('dotenv').config();

// connect to mongoose
mongoose.connect(process.env.MONGODB)
  .then(() => {
  })
  .catch(() => {
  });
mongoose.Promise = global.Promise;

// set up port number
const port = process.env.PORT || 7066;

// set up route
homeRoute(app);
app.use('/api/', mainRoutes);

app.get('/documentation', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.md'));
});

app.get('*', (req, res) => {
  res.status(400).json({
    message: 'This is Project Support, please see documentation for the proper routes.',
  });
});

app.listen(port);

export default app;

