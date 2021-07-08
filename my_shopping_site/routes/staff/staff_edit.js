var express = require('express');
var router = express.Router();
var StaffEditController = require('../../controllers/staff/staff_edit/staff_edit');

/**
 * GET home page.
 */
router.post('/', (new StaffEditController).controller);

module.exports = router;
