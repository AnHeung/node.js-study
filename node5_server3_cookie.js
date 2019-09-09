//쿠키 ---> 키/값 의 쌍
//서버로 부터 쿠키가 오면 웹브라우저(클라)는 쿠키를 저장해 두다가 요청때 마다 쿠키를 같이 보냄
//서버는 요청한 쿠키를 확인해 누군지 체크

//웹 브라우저(클라)는 쿠키가 있으면 자동 같이 보내므로 따로 처리는 필요없음
//서버도 브라우저로 쿠키를 보낼때만 코드작성하면됨.

//서버는 클라 요청자를 추정할만한 정보를 쿠키로 생성 그 후론 클라로부터 쿠키를 받고 요청자 파악

//쿠키는 요청(request) 응답(response)의 헤더에 저장됨.

//요청과 응답은 각각 헤더와 본문(body)를 가짐

const http = require('http');

const parseCookies =  (cookie = '') =>

    cookie
    .split(';')
    .map(v=>v.split('='))
    .reduce((acc,[k,v])=>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

    //parseCookies 메서드
    //쿠키는 name=ahn;year=1994 처럼 문자열 형식으로 옴 그래서 이를
    // {name : 'ahn' , year : '1994'} 이런식으로 바꾸기 위한 메서드


    http.createServer((req,res)=>{
        const cookies = parseCookies(req.headers.cookie);
        console.log(req.url , cookies);
        res.writeHead(200,{'Set-Cookie' : 'mycookie=test'});
        res.end('Hello Cookie');
    })
    .on('error', (err)=>{
        console.log('err', err);
    })
    .listen(4000, ()=>{
        console.log('서버 대기중');
    })