'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartinData extends SuperShopData {
    #cart = null;
    #kazu = null;
    #max = null;
    #wasAddedToCart = false;

    /**
     * コンストラクター
     */
    constructor(cart, kazu, wasAddedToCart) {
        super();

        this.#cart = cart;
        this.#kazu = kazu;
        this.#max = 0;
        if (cart) {
            this.#max = cart.length;
        }
        this.#wasAddedToCart = wasAddedToCart;
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
    get wasAddedToCart() {
        return this.#wasAddedToCart;
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
            wasAddedToCart: this.wasAddedToCart,
            cart: this.cart,
            kazu: this.kazu,
            max: this.max,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}