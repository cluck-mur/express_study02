'use strict'

module.exports = class StaffLoginConst {
    static #STAFF_VIEW_BASE_PATH = 'staff_login';

    /**
     * コンストラクタ―
     */
    constructor() {
    }

    /**
     * STAFF_BASE_PATHのゲッター
     */
    static get STAFF_VIEW_BASE_PATH() {
        return StaffLoginConst.#STAFF_VIEW_BASE_PATH;
    }

    /**
     * ejsファイル用のパスを作る
     * @param {*} target 
     * @returns 
     */
    static buildViewPath(target) {
        if (StaffLoginConst.#STAFF_VIEW_BASE_PATH && StaffLoginConst.#STAFF_VIEW_BASE_PATH.length > 0) {
            return StaffLoginConst.#STAFF_VIEW_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}