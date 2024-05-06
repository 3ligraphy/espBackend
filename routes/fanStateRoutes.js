const express = require('express');
const router = express.Router();
const fanStateController = require('../controllers/fanStateControllers');

router.post('/add-fanState', fanStateController.addFanState);
router.get('/get-fanState', fanStateController.getFanState);

module.exports = router;
