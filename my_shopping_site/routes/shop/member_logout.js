var express = require('express');
var router = express.Router();
var MemberLogoutController = require('../../controllers/shop/member_logout/member_logout');

/**
 * POST home page.
 */
 let controller = new MemberLogoutController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
