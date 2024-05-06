const express = require('express');
const router = express.Router();
const waterPumpStateController = require('../controllers/waterPumpStateControllers');

router.post('/add-waterpumpstate', waterPumpStateController.addWaterPumpState);
router.get('/get-waterpumpstate', waterPumpStateController.getWaterPumpState);

module.exports = router;
