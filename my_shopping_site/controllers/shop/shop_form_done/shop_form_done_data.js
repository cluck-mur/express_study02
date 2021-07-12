'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');
const ShopCartlookData = require('../shop_cartlook/shop_cartlook_data');

module.exports = class ShopFormDoneData extends ShopCartlookData {
    _onamae = null;
    _email = null;
    _postal1 = null;
    _postal2 = null;
    _address = null;
    _tel = null;

    // _isEmailOk = false;
    // _isPostal1Ok = false;
    // _isPostal2Ok = false;
    // _isTelOk = false;

    /**
     * コンストラクター
     */
    constructor(shopProductListInCart, cart, kazu, onamae, email, postal1, postal2, address, tel) {
        super(shopProductListInCart, cart, kazu);

        this._onamae = onamae;
        this._email = email;
        this._postal1 = postal1;
        this._postal2 = postal2;
        this._address = address;
        this._tel = tel;

        // this._isEmailOk = false;
        // this._isPostal1Ok = false;
        // this._isPostal2Ok = false;
        // this._isTelOk = false;
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

    // get isEmailOk() {
    //     return this._isEmailOk;
    // }
    // set isEmailOk(isEmailOk) {
    //     this._isEmailOk = isEmailOk;
    // }
    // get isPostal1Ok() {
    //     return this._isPostal1Ok;
    // }
    // set isPostal1Ok(isPostal1Ok) {
    //     this._isPostal1Ok = isPostal1Ok;
    // }
    // get isPostal2Ok() {
    //     return this._isPostal2Ok;
    // }
    // set isPostal2Ok(isPostal2Ok) {
    //     this._isPostal2Ok = isPostal2Ok;
    // }
    // get isTelOk() {
    //     return this._isTelOk;
    // }
    // set isTelOk(isTelOk) {
    //     this._isTelOk = isTelOk;
    // }

    /**
     * 
     */
    get dataObject() {
        let superObject = super._makeObject();

        return this._makeObject(superObject);
    }

    /**
     * 
     * @returns 
     */
    _makeObject(superObject) {
        superObject['onamae'] = this.onamae;
        superObject['email'] = this.email;
        superObject['postal1'] = this.postal1;
        superObject['postal2'] = this.postal2;
        superObject['address'] = this.address;
        superObject['tel'] = this.tel;
        // isOnamaeOk: this.isOnamaeOk,
        // isEmailOk: this.isEmailOk,
        // isPostal1Ok: this.isPostal1Ok,
        // isPostal2Ok: this.isPostal2Ok,
        // isTelOk: this.isTelOk,
        // sessionMemberLogin: this.sessionMemberLogin,
        // sessionMemberName: this.sessionMemberName,
        return superObject;
    }
}