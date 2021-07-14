'use strict';
const crypto = require('crypto');
const SuperViewIfData = require('../../common/super_view_if_data');

module.exports = class MemberLoginCheckData extends SuperViewIfData {
    _email = null;
    _pass = null;
    _code = null;
    _name = null;
    _isLoginOk = null;

    /**
     * コンストラクター
     */
    constructor(email, pass) {
        // super();
        super();

        this._email = email;
        this._pass = pass;
        this._code = 0;
        this._name = null;
        this._isLoginOk = false;

        this.md5Pass = this._pass;
    }

    get email() {
        return this._email;
    }
    get pass() {
        return this._pass;
    }

    get code() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get isLoginOk() {
        return this._isLoginOk;
    }
    set isLoginOk(setData) {
        this._isLoginOk = setData;
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
            email: this._email,
            pass: this._pass,
            code: this._code,
            name: this._name,
            md5Pass: this.md5Pass,
            isLoginOk: this.isLoginOk,
        };
    }
}