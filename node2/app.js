// Package 
require('dotenv').config();
const express=require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')   
const app = express();
const port = process.env.SERVER_PORT || 3000;


// Database 연동
var db_connect = require('./db/db_connect');
var db_sql = require('./db/db_sql');

// CORS 지정
const cors = require("cors");
app.use(cors());
// HTML 파일 위치 views
nunjucks.configure('views',{
    express:app,
});

// html 환경 설정, post, public
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false})); //객체 들어감. 추가 2 
app.use(express.static('public'));







// Controller
// 127.0.0.1/
app.get('/', (req,res)=>{
    res.render('index');
});
// Login 화면
app.get('/login', (req,res)=>{
    res.render('index',{'center':'login'});
});
// Register 화면
app.get('/register', (req,res)=>{
    res.render('index',{'center':'register'});
});
app.post('/registerimpl', (req,res)=>{
    // 입력값 받기
    // DB에 입력 하고 center에 회원가입을 축하합니다. 출력
    res.render('index',{'center':'register'});
});
// Map 화면
app.get('/map', (req,res)=>{
    res.render('index',{'center':'map'});
});
app.get('/map2', (req,res)=>{
    res.render('index',{'center':'map2'});
});
// Chart 화면
app.get('/chart', (req,res)=>{
    res.render('index',{'center':'chart'});
});
app.get('/chart2', (req,res)=>{
    res.render('index',{'center':'chart2'});
});


// Detail 화면
app.get('/detail', (req,res)=>{
    res.render('index',{'center':'detail'});
});

// Router 
const cust = require('./routes/cust');
const item = require('./routes/item');
app.use('/cust', cust);
app.use('/item', item);

app.listen(port,()=>{
    console.log(`server start port:${port}`)
})

