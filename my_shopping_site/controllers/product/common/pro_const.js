'use strict'

module.exports = class ProductConst {
    static #PRODUCT_VIEW_BASE_PATH = 'product';

    /**
     * コンストラクタ―
     */
    constructor() {
    }

    /**
     * STAFF_BASE_PATHのゲッター
     */
    static get PRODUCT_VIEW_BASE_PATH() {
        return ProductConst.#PRODUCT_VIEW_BASE_PATH;
    }

    /**
     * ejsファイル用のパスを作る
     * @param {*} target 
     * @returns 
     */
    static buildViewPath(target) {
        if (ProductConst.#PRODUCT_VIEW_BASE_PATH && ProductConst.#PRODUCT_VIEW_BASE_PATH.length > 0) {
            return ProductConst.#PRODUCT_VIEW_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}