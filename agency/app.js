require('dotenv').config();
const express=require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')   //body parser 추가 1
const app = express();
const port = process.env.SERVER_PORT || 3000;

nunjucks.configure('views',{
    express:app,
})

app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false})); //객체 들어감. 추가 2 
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index');
})
app.get('/port', (req,res)=>{
    res.render('index',{'center':'portfolio'});
})
app.get('/about', (req,res)=>{
    res.render('index',{'center':'about'});
})
app.get('/team', (req,res)=>{
    res.render('index',{'center':'team'});
})
app.get('/contact', (req,res)=>{
    res.render('index',{'center':'contact'});
})

app.listen(port,()=>{
    console.log(`server start port:${port}`)
})