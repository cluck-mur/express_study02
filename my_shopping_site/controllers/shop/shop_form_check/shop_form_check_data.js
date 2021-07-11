'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ShopFormCheckData extends SuperShopData {
    #onamae = null;
    #email = null;
    #postal1 = null;
    #postal2 = null;
    #address = null;
    #tel = null;

    // #isOnamaeOk = false;
    #isEmailOk = false;
    #isPostal1Ok = false;
    #isPostal2Ok = false;
    #isTelOk = false;

    /**
     * コンストラクター
     */
    constructor(onamae, email, postal1, postal2, address, tel) {
        super();

        this.#onamae = onamae;
        this.#email = email;
        this.#postal1 = postal1;
        this.#postal2 = postal2;
        this.#address = address;
        this.#tel = tel;

        this.#isEmailOk = false;
        this.#isPostal1Ok = false;
        this.#isPostal2Ok = false;
        this.#isTelOk = false;
    }

    get onamae() {
        return this.#onamae;
    }
    get email() {
        return this.#email;
    }
    get postal1() {
        return this.#postal1;
    }
    get postal2() {
        return this.#postal2;
    }
    get address() {
        return this.#address;
    }
    get tel() {
        return this.#tel;
    }

    // get isOnamaeOk() {
    //     return this.#isOnamaeOk;
    // }
    // set isOnamaeOk(isOnamaeOk) {
    //     this.#isOnamaeOk = isOnamaeOk;
    // }
    get isEmailOk() {
        return this.#isEmailOk;
    }
    set isEmailOk(isEmailOk) {
        this.#isEmailOk = isEmailOk;
    }
    get isPostal1Ok() {
        return this.#isPostal1Ok;
    }
    set isPostal1Ok(isPostal1Ok) {
        this.#isPostal1Ok = isPostal1Ok;
    }
    get isPostal2Ok() {
        return this.#isPostal2Ok;
    }
    set isPostal2Ok(isPostal2Ok) {
        this.#isPostal2Ok = isPostal2Ok;
    }
    get isTelOk() {
        return this.#isTelOk;
    }
    set isTelOk(isTelOk) {
        this.#isTelOk = isTelOk;
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
            onamae: this.onamae,
            email: this.email,
            postal1: this.postal1,
            postal2: this.postal2,
            address: this.address,
            tel: this.tel,
            isOnamaeOk: this.isOnamaeOk,
            isEmailOk: this.isEmailOk,
            isPostal1Ok: this.isPostal1Ok,
            isPostal2Ok: this.isPostal2Ok,
            isTelOk: this.isTelOk,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}