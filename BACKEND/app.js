const express = require('express');
const bodyParser = require('body-parser');

const statisticsRoutes = require('./routes/statistics-routes');

const app = express();

app.use(statisticsRoutes);




app.listen(5000);