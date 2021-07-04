module.exports = new class MstStaffConst {
    #NAME_LENGTH = 0;
    #PASSWORD_LENGTH = 0;
    constructor() {
        this.#NAME_LENGTH = 15;
        this.#PASSWORD_LENGTH = 32;
    }

    get NAME_LENGTH() {
        return this.#NAME_LENGTH;
    }

    get PASSWORD_LENGTH() {
        return this.#PASSWORD_LENGTH;
    }

}