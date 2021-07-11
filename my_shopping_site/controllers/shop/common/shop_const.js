'use strict'

module.exports = class ShopConst {
    static #SHOP_VIEW_BASE_PATH = 'shop';

    /**
     * コンストラクタ―
     */
    constructor() {
    }

    /**
     * STAFF_BASE_PATHのゲッター
     */
    static get SHOP_VIEW_BASE_PATH() {
        return ShopConst.#SHOP_VIEW_BASE_PATH;
    }

    /**
     * ejsファイル用のパスを作る
     * @param {*} target 
     * @returns 
     */
    static buildViewPath(target) {
        if (ShopConst.#SHOP_VIEW_BASE_PATH && ShopConst.#SHOP_VIEW_BASE_PATH.length > 0) {
            return ShopConst.#SHOP_VIEW_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}