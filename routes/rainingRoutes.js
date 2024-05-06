const express = require('express');
const router = express.Router();
const rainingController = require('../controllers/rainingControllers');

router.post('/add-raining', rainingController.addRaining);
router.get('/get-raining', rainingController.getRaining);

module.exports = router;
