var express = require('express');
var router = express.Router();
var StaffLoginController = require('../../controllers/staff_login/staff_login/staff_login');

/**
 * POST home page.
 */
router.get('/', (new StaffLoginController).controller);

module.exports = router;
