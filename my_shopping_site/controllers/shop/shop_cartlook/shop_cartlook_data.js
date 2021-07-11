'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartlookData extends SuperShopData {
    #shopProductListInCart = null;

    /**
     * コンストラクター
     */
    constructor(shopProductListInCart) {
        super();

        this.#shopProductListInCart = shopProductListInCart;
    }

    get shopProductListInCart() {
        return this.#shopProductListInCart;
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
            cart: this.shopProductListInCart,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}