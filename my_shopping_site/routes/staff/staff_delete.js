var express = require('express');
var router = express.Router();
var StaffDeleteController = require('../../controllers/staff/staff_delete/staff_delete');

/**
 * GET home page.
 */
router.post('/', (new StaffDeleteController).controller);

module.exports = router;
