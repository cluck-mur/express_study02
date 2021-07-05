'use strict'

module.exports = class StaffConst {
    static #STAFF_VIEW_BASE_PATH = 'staff';

    /**
     * コンストラクタ―
     */
    constructor() {
    }

    /**
     * STAFF_BASE_PATHのゲッター
     */
    static get STAFF_VIEW_BASE_PATH() {
        return StaffConst.#STAFF_VIEW_BASE_PATH;
    }

    /**
     * ejsファイル用のパスを作る
     * @param {*} target 
     * @returns 
     */
    static buildViewPath(target) {
        if (StaffConst.#STAFF_VIEW_BASE_PATH && StaffConst.#STAFF_VIEW_BASE_PATH.length > 0) {
            return StaffConst.#STAFF_VIEW_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}