'use strict'

module.exports = class StaffConst {
    static #ROUTE_BASE_PATH = 'staff';

    constructor() {
    }

    static get ROUTE_BASE_PATH() {
        return StaffConst.#ROUTE_BASE_PATH;
    }

    static buildRoutePathForRequire(target) {
        if (StaffConst.#ROUTE_BASE_PATH && StaffConst.#ROUTE_BASE_PATH.length > 0) {
            return 'routes/' + StaffConst.#ROUTE_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}