var express = require('express');
var router = express.Router();
var StaffNologinNgController = require('../../controllers/staff_login/staff_nologin_ng/staff_nologin_ng');

/**
 * POST home page.
 */
router.get('/', (new StaffNologinNgController).controller);

module.exports = router;
