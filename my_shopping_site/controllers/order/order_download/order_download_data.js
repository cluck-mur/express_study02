'use strict';
const crypto = require('crypto');
const SuperOrderData = require('../common/super_order_data');

module.exports = class OrderDownloadData extends SuperOrderData {
    #selectYear = null;
    #selectMonth = null;
    #selectDay = null;

    /**
     * コンストラクター
     */
    constructor() {
        super();

        this.#selectYear = [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ];

        let monthArray = [];
        for (let i=1; i<=12; i++) {
            monthArray.push(( '00' + i ).slice( -2 ));
        }
        this.#selectMonth = monthArray;

        let dayArray = [];
        for (let i=1; i<=31; i++) {
            dayArray.push(( '00' + i ).slice( -2 ));
        }
        this.#selectDay = dayArray;
    }

    get selectYear() {
        return this.#selectYear;
    }
    get selectMonth() {
        return this.#selectMonth;
    }
    get selectDay() {
        return this.#selectDay;
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
            selectYear: this.selectYear,
            selectMonth: this.selectMonth,
            selectDay: this.selectDay,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}