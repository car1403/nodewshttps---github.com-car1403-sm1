// Package 
require('dotenv').config();
const express=require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')   
const app = express();
const port = process.env.SERVER_PORT || 3000;

const multer  = require('multer')
const limits = {
    fieldNameSize: 200, // 필드명 사이즈 최대값 (기본값 100bytes)
    filedSize: 1024 * 1024, // 필드 사이즈 값 설정 (기본값 1MB)
    fields: 2, // 파일 형식이 아닌 필드의 최대 개수 (기본 값 무제한)
    fileSize : 16777216, //multipart 형식 폼에서 최대 파일 사이즈(bytes) "16MB 설정" (기본 값 무제한)
    files : 10, //multipart 형식 폼에서 파일 필드 최대 개수 (기본 값 무제한)
}
// 파일 경로 및 이름 설정 옵션
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img') // 파일 업로드 경로
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //파일 이름 설정
    }
  })
const upload = multer({ 
    storage: storage
}) 
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
app.post('/loginimpl', upload.single('imgfile') , (req,res)=>{
    
    let id = req.body.id; 
    let pwd = req.body.pwd;
    const { originalname } = req.file
    console.log('ID:'+id);
    console.log('PWD:'+pwd);

    res.render('loginok',{'loginid':id, 'img':originalname});
});

app.listen(port,()=>{
    console.log(`server start port:${port}`)
})

