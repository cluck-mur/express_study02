var express = require('express');
var router = express.Router();
var StaffDispController = require('../../controllers/staff/staff_disp/staff_disp');

/**
 * GET home page.
 */
router.post('/', (new StaffDispController).controller);

module.exports = router;
