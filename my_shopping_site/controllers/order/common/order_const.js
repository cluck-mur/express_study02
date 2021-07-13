'use strict'

module.exports = class OrderConst {
    static #ORDER_VIEW_BASE_PATH = 'order';

    /**
     * コンストラクタ―
     */
    constructor() {
    }

    /**
     * STAFF_BASE_PATHのゲッター
     */
    static get PRODUCT_VIEWORDER_VIEW_BASE_PATH_BASE_PATH() {
        return OrderConst.#ORDER_VIEW_BASE_PATH;
    }

    /**
     * ejsファイル用のパスを作る
     * @param {*} target 
     * @returns 
     */
    static buildViewPath(target) {
        if (OrderConst.#ORDER_VIEW_BASE_PATH && OrderConst.#ORDER_VIEW_BASE_PATH.length > 0) {
            return OrderConst.#ORDER_VIEW_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}