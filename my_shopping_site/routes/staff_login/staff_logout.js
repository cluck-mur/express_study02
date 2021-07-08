var express = require('express');
var router = express.Router();
var StaffLogoutController = require('../../controllers/staff_login/staff_logout/staff_logout');

/**
 * POST home page.
 */
router.get('/', (new StaffLogoutController).controller);

module.exports = router;
