const express = require('express');
const { fetchFoodData } = require('../controller/foodController');
const router = express.Router();

router.get('/food', fetchFoodData);

module.exports = router;
