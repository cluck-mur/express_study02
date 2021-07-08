var express = require('express');
var router = express.Router();
var StaffNgController = require('../../controllers/staff/staff_ng/staff_ng');

/**
 * GET home page.
 */
router.get('/', (new StaffNgController).controller);

module.exports = router;
