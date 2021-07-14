"use strict";
const crypto = require("crypto");


module.exports = class SuperViewIfData {
    _md5Pass = null;

    /**
     * コンストラクター
     */
    constructor() {
        this._md5Pass = null;
    }

    /**
     * ゲッター
     */
    get md5Pass() {
        return this._md5Pass;
    }
    /**
     * セッター for md5Pass
     */
    set md5Pass(pass) {
        if (pass != undefined && pass != null && pass.length > 0) {
            this._md5Pass = this._md5(pass);
        } else {
            this._md5Pass = null;
        }
    }

    /**
     * MD5 ハッシュ化する
     * @param {*} str
     * @returns
     */
    _md5(str) {
        const md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest("base64");
    }
};
