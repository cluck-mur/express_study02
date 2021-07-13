'use strict'

module.exports = class OrderConst {
    static #ROUTE_BASE_PATH = 'order';

    constructor() {
    }

    static get ROUTE_BASE_PATH() {
        return OrderConst.#ROUTE_BASE_PATH;
    }

    static buildRoutePathForRequire(target) {
        if (OrderConst.#ROUTE_BASE_PATH && OrderConst.#ROUTE_BASE_PATH.length > 0) {
            return 'routes/' + OrderConst.#ROUTE_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}