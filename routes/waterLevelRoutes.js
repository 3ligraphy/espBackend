const express = require('express');
const router = express.Router();
const waterLevelController = require('../controllers/waterLevelController');

router.post('/add-waterlevel', waterLevelController.addWaterLevel);
router.get('/get-waterlevel', waterLevelController.getWaterLevel);

module.exports = router;
