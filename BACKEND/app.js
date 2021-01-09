const express = require('express');
const bodyParser = require('body-parser');

const statisticsRoutes = require('./routes/userStatistics-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/userStatistics', statisticsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(5000);