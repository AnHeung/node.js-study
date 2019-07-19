const http = require('http');


    http.createServer((req, res) => {
        res.write('<h1>Hello Node</h1>');
        res.end('<p>Hello Server!</p>');
    }).on('error' , (error)=>{console.error('error 발생', error)}).listen(8080, () => {
        console.log('8080 포트에서 서버 대기중..');
    });

