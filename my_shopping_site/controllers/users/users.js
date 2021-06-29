module.exports = new class UsersController {
    /**
     * コンストラクター
     */
    constructor() {
    }

    /**
     * コントローラー ルーティング /users 用
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    users(req, res, next) {
        res.send('respond with a resource');
    }
}