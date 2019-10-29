var express = require('express');
var router = express.Router();

//增加引用函式
const setting = require('../utility/setting');

router.get('/', function (req, res) {

  setting.floor().then(fl=>{
    console.log(fl);
    setting.room().then(ro=>{
      console.log(ro);
      setting.user().then(us=>{
        console.log(us);
        setting.devicetype().then(dt=>{
          console.log(dt);
          setting.deviceall().then(dall=>{
            console.log(dall);
            setting.team().then(te=>{
              console.log(te);
              res.render('./setting/setting_group',{floor:fl, room:ro, user:us, devicetype:dt, device:dall, team:te});
            });
          });
        });
      });
    });
  });

});

module.exports = router;