'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopFormCheckData extends SuperShopData {
    _onamae = null;
    _email = null;
    _postal1 = null;
    _postal2 = null;
    _address = null;
    _tel = null;

    // _isOnamaeOk = false;
    _isEmailOk = false;
    _isPostal1Ok = false;
    _isPostal2Ok = false;
    _isTelOk = false;

    _chumon = null;
    _pass = null;
    _pass2 = null;
    _danjo = null;
    _birth = null;

    _isPassInputOk = false;
    _isPassCompareOk = false;

    /**
     * コンストラクター
     */
    constructor(
        onamae,
        email,
        postal1,
        postal2,
        address,
        tel,
        chumon,
        pass,
        pass2,
        danjo,
        birth
    ) {
        super();

        this._onamae = onamae;
        this._email = email;
        this._postal1 = postal1;
        this._postal2 = postal2;
        this._address = address;
        this._tel = tel;

        this._chumon = chumon;
        this._pass = pass;
        this._pass2 = pass2;
        this._danjo = danjo;
        this._birth = birth;

        this._isEmailOk = false;
        this._isPostal1Ok = false;
        this._isPostal2Ok = false;
        this._isTelOk = false;

        this._isPassInputOk = false;
        this._isPassCompareOk = false;
    }

    get onamae() {
        return this._onamae;
    }
    get email() {
        return this._email;
    }
    get postal1() {
        return this._postal1;
    }
    get postal2() {
        return this._postal2;
    }
    get address() {
        return this._address;
    }
    get tel() {
        return this._tel;
    }
    get chumon() {
        return this._chumon;
    }
    get pass() {
        return this._pass;
    }
    get pass2() {
        return this._pass2;
    }
    get danjo() {
        return this._danjo;
    }
    get birth() {
        return this._birth;
    }
    // get isOnamaeOk() {
    //     return this._isOnamaeOk;
    // }
    // set isOnamaeOk(isOnamaeOk) {
    //     this._isOnamaeOk = isOnamaeOk;
    // }
    get isEmailOk() {
        return this._isEmailOk;
    }
    set isEmailOk(isEmailOk) {
        this._isEmailOk = isEmailOk;
    }
    get isPostal1Ok() {
        return this._isPostal1Ok;
    }
    set isPostal1Ok(isPostal1Ok) {
        this._isPostal1Ok = isPostal1Ok;
    }
    get isPostal2Ok() {
        return this._isPostal2Ok;
    }
    set isPostal2Ok(isPostal2Ok) {
        this._isPostal2Ok = isPostal2Ok;
    }
    get isTelOk() {
        return this._isTelOk;
    }
    set isTelOk(isTelOk) {
        this._isTelOk = isTelOk;
    }
    get isPassInputOk() {
        return this._isPassInputOk;
    }
    set isPassInputOk(isPassInputOk) {
        this._isPassInputOk = isPassInputOk;
    }
    get isPassCompareOk() {
        return this._isPassCompareOk;
    }
    set isPassCompareOk(isPassCompareOk) {
        this._isPassCompareOk = isPassCompareOk;
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
        return {
            onamae: this.onamae,
            email: this.email,
            postal1: this.postal1,
            postal2: this.postal2,
            address: this.address,
            tel: this.tel,
            chumon: this.chumon,
            pass: this.pass,
            pass2: this.pass2,
            danjo: this.danjo,
            birth: this.birth,
            isOnamaeOk: this.isOnamaeOk,
            isEmailOk: this.isEmailOk,
            isPostal1Ok: this.isPostal1Ok,
            isPostal2Ok: this.isPostal2Ok,
            isTelOk: this.isTelOk,
            isPassInputOk: this.isPassInputOk,
            isPassCompareOk: this.isPassCompareOk,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}