const express=require('express');
const app = express();
const router = express.Router();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser'); 

// Database 연동
var db_connect = require('../db/db_connect');
var db_sql = require('../db/db_sql');
// My Util
var goto = require('../util/goto');

router
    .get("/",(req,res)=>{   // 127.0.0.1/item
        goto.go(req,res,{'center':'item/list'});
    })
    .get("/add",(req,res)=>{   // 127.0.0.1/item/add
        goto.go(req,res,{'center':'item/add'});
    })
    .post("",(req,res)=>{

    });

module.exports = router;