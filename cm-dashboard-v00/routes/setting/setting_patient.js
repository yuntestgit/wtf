var express = require('express');
var router = express.Router();

//增加引用函式
const setting = require('../utility/setting');

/* GET home page. */
router.get('/', function (req, res) {

  var userdata=[];
  setting.room().then(room =>{
    setting.floor().then(floor=>{
      setting.user().then(user => {
        for (var filter = 0; filter < user.length; filter++) {
          if (user[filter].Role == 4) {
            userdata.push(user[filter]);
          }
        }
        res.render('./setting/setting_patient',{floor:floor,room:room,user:userdata});
      });
    });
  });

});

module.exports = router;