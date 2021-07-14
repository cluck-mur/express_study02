var express = require('express');
var router = express.Router();
var MemberLoginCheckController = require('../../controllers/shop/member_login_check/member_login_check');

/**
 * POST home page.
 */
 let controller = new MemberLoginCheckController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
