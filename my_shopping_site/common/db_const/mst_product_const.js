module.exports = new class MstStaffConst {
    #NAME_LENGTH = 0;
    #GAZOU_LENGTH = 0;
    constructor() {
        this.#NAME_LENGTH = 30;
        this.#GAZOU_LENGTH = 30;
    }

    get NAME_LENGTH() {
        return this.#NAME_LENGTH;
    }

    get GAZOU_LENGTH() {
        return this.#GAZOU_LENGTH;
    }

}