'use strict'

module.exports = function sessionRegerateId(req, res) {
    var sessions = {}

    //セッションに格納している値を取得しておく
    for (var key in req.session) {
        sessions[key] = req.session[key];
    }
    req.session.regenerate(function(error) {
        if (error) {
            console.log(error);
            return;
        }

       //セッションIDが再生成, すなわち, 新しいsessionオブジェクトが生成されたので, セッションに格納していた値を復元する
        for (var key in sessions) {
            req.session[key] = sessions[key];
        }
        //セッションID再生成後の処理
    });
};