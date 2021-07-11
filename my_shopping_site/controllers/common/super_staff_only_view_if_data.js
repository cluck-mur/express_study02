"use strict";
const crypto = require("crypto");
const SuperViewIfData = require('./super_view_if_data');

module.exports = class SuperStaffOnlyViewIfData extends SuperViewIfData {
    #sessionLogin = false;
    #sessionStaffName = null;

    /**
     * コンストラクター
     */
    constructor() {
        super();
        this.#sessionLogin = false;
        this.#sessionStaffName = null;
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
};
