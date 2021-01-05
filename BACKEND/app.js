const express = require('express');
const bodyParser = require('body-parser');

const statisticsRoutes = require('./routes/userStatistics-routes');

const app = express();

app.use('/api/userStatistics', statisticsRoutes);

app.listen(5000);