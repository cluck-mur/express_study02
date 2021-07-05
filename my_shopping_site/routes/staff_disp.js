var express = require('express');
var router = express.Router();
var staffDispController = require('../controllers/staff_disp/staff_disp');

/**
 * GET home page.
 */
router.post('/', staffDispController.staffDisp);

module.exports = router;
