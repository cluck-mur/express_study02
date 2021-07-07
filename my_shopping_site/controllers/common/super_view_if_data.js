"use strict";
const crypto = require("crypto");


module.exports = class SuperViewIfData {
    #sessionLogin = false;
    #sessionStaffName = null;
    #md5Pass = null;

    /**
     * コンストラクター
     */
    constructor() {
        this.#sessionLogin = false;
        this.#sessionStaffName = null;
        this.#md5Pass = null;
    }

    get sessionLogin() {
        return this.#sessionLogin;
    }
    set sessionLogin(setData) {
        this.#sessionLogin = setData;
    }
    get sessionStaffName() {
        return this.#sessionStaffName;
    }
    set sessionStaffName(setData) {
        this.#sessionStaffName = setData;
    }
    /**
     * ゲッター
     */
    get md5Pass() {
        return this.#md5Pass;
    }
    /**
     * セッター for md5Pass
     */
    set md5Pass(pass) {
        if (pass != undefined && pass != null && pass.length > 0) {
            this.#md5Pass = this.#md5(pass);
        } else {
            this.#md5Pass = null;
        }
    }

    /**
     * MD5 ハッシュ化する
     * @param {*} str
     * @returns
     */
    #md5(str) {
        const md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest("base64");
    }
};
