// Package 
require('dotenv').config();
const express=require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')   
const app = express();
const port = process.env.SERVER_PORT || 3000;

// HTML 파일 위치 views
nunjucks.configure('views',{
    express:app,
});

// html 환경 설정, post, public
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false})); //객체 들어감. 추가 2 
app.use(express.static('public'));

// Controller
// 127.0.0.1:3000/
app.get('/', (req,res)=>{
    res.render('index');
});
// /info 
app.get('/info', (req,res)=>{
    res.render('info',{'id':'id01','name':'이말숙'});
});

// /login 
app.get('/login', (req,res)=>{
    res.render('login');
});


// /loginimpl 
app.post('/loginimpl', (req,res)=>{
    let id = req.body.id; 
    let pwd = req.body.pwd;
    console.log('ID:'+id);
    console.log('PWD:'+pwd);
    res.render('loginok',{'loginid':id});
});

app.listen(port,()=>{
    console.log(`server start port:${port}`)
})

