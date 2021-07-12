'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopCartlookData extends SuperShopData {
    _shopProductListInCart = null;
    _cart = null;
    _kazu = null;
    _max = null;

    /**
     * コンストラクター
     */
    constructor(shopProductListInCart, cart, kazu) {
        super();

        this._shopProductListInCart = shopProductListInCart;
        this._cart = cart;
        this._kazu = kazu;
        this._max = 0;
        if (cart) {
            this._max = cart.length;
        }
    }

    get shopProductListInCart() {
        return this._shopProductListInCart;
    }
    get cart() {
        return this._cart;
    }
    get kazu() {
        return this._kazu;
    }
    get max() {
        return this._max;
    }

    /**
     * 
     */
    get dataObject() {
        // console.log(this._makeObject());
        return this._makeObject();
    }

    /**
     * 
     * @returns 
     */
    _makeObject() {
        // 商品コードと注文数を紐づける表を作成
        let cartViewData = null;
        let cart = this.cart;
        let kazu = this.kazu;

        if (cart) {
            // let codeKazuList = {};
            // let i = 0;
            // cart.forEach((value, key) => {
            //     codeKazuList[value] = kazu[i];
            //     i++;
            // }, cart);

            // cartViewData = this._shopProductListInCart
            // cartViewData.forEach((value, key) => {
            //     value['kazu'] = codeKazuList[value.code];
            // }, cartViewData);
            cartViewData = this._integrateKazuToProductList(
                this._shopProductListInCart,
                cart,
                kazu);
        }

        return {
            cart: cartViewData,
            max: this.max,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }

    /**
     * 商品コードと注文数を紐づけた表を作成
     * @param {*} productList 
     * @param {*} cartArray 
     * @param {*} kazuArray 
     * @returns 
     */
    _integrateKazuToProductList(productList, cartArray, kazuArray) {
        let cartViewData = null;
        let cart = cartArray;
        let kazu = kazuArray;

        let codeKazuList = {};
        let i = 0;
        cart.forEach((value, key) => {
            codeKazuList[value] = kazu[i];
            i++;
        }, cart);

        cartViewData = productList
        cartViewData.forEach((value, key) => {
            value['kazu'] = codeKazuList[value.code];
        }, cartViewData);

        return cartViewData;
    }
}