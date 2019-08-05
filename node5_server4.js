const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});



http.createServer((req,res)=>{

    const cookies = parseCookies(req.headers.cookie);
    console.log('쿠키값 : ' , cookies);

    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);

        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':`name=${encodeURIComponent(name)};Expires=${expires.toGMTString()}; path=/`,
        });
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    }else{
        fs.readFile('./node5_server4.html', (err,data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
})
.on('error', (err)=>{console.error('error발생 :', err)})
.listen('4100',()=>{
    console.log(' 4100 서버 실행중');
})