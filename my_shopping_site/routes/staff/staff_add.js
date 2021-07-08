var express = require('express');
var router = express.Router();
var StaffAddController = require('../../controllers/staff/staff_add/staff_add');

/**
 * GET home page.
 */
router.get('/', (new StaffAddController).controller);

module.exports = router;
