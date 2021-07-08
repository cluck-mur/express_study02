var express = require('express');
var router = express.Router();
var StaffTopController = require('../../controllers/staff_login/staff_top/staff_top');

/**
 * POST home page.
 */
router.get('/', (new StaffTopController).controller);

module.exports = router;
