var express = require('express');
var router = express.Router();

//接收GET請求
router.get('/', function(req, res, next) {
    if (req.session.language) {//检查用户是否已经登录
        //打印session的值
        req.session.language++;
        var language=req.session.language;
        console.log(language);
    } else {
        req.session.language = "0";
        var language=req.session.language;
        console.log(req.session);
    }
    res.render('./user_login_form', { title: "護聯網平台" ,"session":"fuck"});
});

module.exports = router;