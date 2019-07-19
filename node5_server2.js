const http = require('http');

const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./node5_server2.html', (err, data) => {

        try {
            if (err) {
                throw new Error('파일 읽기 에러발생');
            }
            console.log('파일 읽기 완료 ', data);
            res.end(data);
        } catch (error) {
            console.error('catch 에러 발생: ',error);
        }
    });
})
    .on('error', (err) => console.error('에러발생 : ', err))
    .listen(3000, () => {
        console.log('서버가 실행중입니다 ...3000');
    });