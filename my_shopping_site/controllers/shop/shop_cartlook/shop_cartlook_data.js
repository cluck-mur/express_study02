'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartlookData extends SuperShopData {
    #shopProductListInCart = null;
    #cart = null;
    #kazu = null;
    #max = null;

    /**
     * コンストラクター
     */
    constructor(shopProductListInCart, cart, kazu) {
        super();

        this.#shopProductListInCart = shopProductListInCart;
        this.#cart = cart;
        this.#kazu = kazu;
        this.#max = 0;
        if (cart) {
            this.#max = cart.length;
        }
    }

    get shopProductListInCart() {
        return this.#shopProductListInCart;
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
        // 商品コードと注文数を紐づける表を作成
        let cartViewData = null;
        let cart = this.cart;
        let kazu = this.kazu;

        if (cart) {

            let codeKazuList = {};
            let i = 0;
            cart.forEach((value, key) => {
                codeKazuList[value] = kazu[i];
                i++;
            }, cart);

            cartViewData = this.#shopProductListInCart
            cartViewData.forEach((value, key) => {
                value['kazu'] = codeKazuList[value.code];
            }, cartViewData);
        }

        return {
            cart: cartViewData,
            max: this.max,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}