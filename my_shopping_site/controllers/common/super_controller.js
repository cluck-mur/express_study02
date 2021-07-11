'use strict'
const htmlspecialchars = require('htmlspecialchars');
const ControllerConst = require('./controller_const');
const session_regerate_id = require('./session_regerate_id');

module.exports = class SuperController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
    }

    /**
     * 
     * @param {*} req 
     * @returns 
     */
    htmlspecialchars(req) {
        if (req.method == 'POST') {
            let result = {
                body: null,
                file: null,
            };

            if (req.body) {
                result.body = { ...req.body };
                for (const [key, value] of Object.entries(req.body)) {
                    let sanitized = this.#htmlspecialcharsSub(value);
                    result.body[key] = sanitized;
                }
            }
            if (req.file) {
                result.file = { ...req.file };
                for (const [key, value] of Object.entries(req.file)) {
                    let sanitized = this.#htmlspecialcharsSub(value);
                    result.file[key] = sanitized;
                }
            }

            return result;
        }

        if (req.method == 'GET') {
            let result = {
                query: null,
            };

            if (req.query) {
                result.query = { ...req.query };
                for (const [key, value] of Object.entries(req.query)) {
                    let sanitized = this.#htmlspecialcharsSub(value);
                    result.body[key] = sanitized;
                }
            }
            
            return result;
        }

    }

    /**
     * 
     * @param {*} value 
     */
    #htmlspecialcharsSub(value) {
        let sanitized = null;
        if (value) {
            if (typeof (value) == 'string' && value.length > 0) {
                sanitized = htmlspecialchars(value);
            } else {
                sanitized = value;
            }
        } else {
            sanitized = value;
        }

        return sanitized;
    }
}
