const express = require('express');
const foodRoutes = require('./routes/foodRouter');

const app = express();
app.use('/api', foodRoutes);

module.exports = app;
