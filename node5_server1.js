const http = require('http');   

http.createServer((req,res)=>{
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server!</p>');
})
.on('error' , (err)=>console.error('에러발생 : ', err))
.listen(3000, ()=>console.log('서버 통신중'));

//res 에는 end와 write 두가지 메서드가 있다
//write 의 첫번째 인자는 클라이언트로 보낼 데이터다. 스트링으로 보냈지만 버퍼도 가능하다.
//또한 여러번 호출해서 데이터를 여러개 보내기도 가능.

//res.end는 응답을 종료하는 메서드
//인자는 클라에 마지막으로 보낼 데이터이고 해당 데이터를 보내고 종료됨.


