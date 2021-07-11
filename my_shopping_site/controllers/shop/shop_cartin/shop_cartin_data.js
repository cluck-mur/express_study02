'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartinData extends SuperShopData {
    #cart = null;

    /**
     * コンストラクター
     */
    constructor(cart) {
        super();

        this.#cart = cart;
    }

    get cart() {
        return this.#cart;
    }

    /**
     * 
     */
    get dataObject() {
        // console.log(this.#makeObject());
        return this.#makeObject();
    }

    /**
     * 
     * @returns 
     */
    #makeObject() {
        return {
            cart: this.cart,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}