'use strict';
const crypto = require('crypto');
const ShopFormCheckData = require('../shop_form_check/shop_form_check_data');

module.exports = class ShopKantanCheckData extends ShopFormCheckData {
    /**
     * コンストラクター
     */
    constructor(
        onamae,
        email,
        postal1,
        postal2,
        address,
        tel,
        chumon,
        pass,
        pass2,
        danjo,
        birth
    ) {
        super(
            onamae,
            email,
            postal1,
            postal2,
            address,
            tel,
            chumon,
            pass,
            pass2,
            danjo,
            birth
            );
    }
}