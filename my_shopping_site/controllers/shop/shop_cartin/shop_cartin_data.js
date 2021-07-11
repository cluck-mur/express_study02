'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartinData extends SuperShopData {
    #cart = null;
    #kazu = null;
    #max = null;

    /**
     * コンストラクター
     */
    constructor(cart, kazu) {
        super();

        this.#cart = cart;
        this.#kazu = kazu;
        this.#max = 0;
        if (cart) {
            this.#max = cart.length;
        }
    }

    get cart() {
        return this.#cart;
    }
    get kazu() {
        return this.#kazu;
    }
    get max() {
        return this.#max;
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
            kazu: this.kazu,
            max: this.max,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}