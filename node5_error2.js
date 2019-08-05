const fs = require('fs');

//fs.unlink ()
//Asynchronously removes a file or symbolic link.
// No arguments other than a possible exception are given to the completion callback.

setInterval(()=>{
    fs.unlink('./abcdefg.js', (err)=>{
        if(err){
            console.log(err);
        }
    });
}, 1000);

//unlink로 없는 파일을 지우고 있지만 얘도 에러는 발생하지만 프로세스가 멈추진않는다.
//에러를 throw 하면 원래 프로세스가 멈추지만 try catch 문을 통해 멈추지 않고 에러를 잡을 수 있다.
//error1.js 에 나오듯 new Error(인자) 로 던져서 catch문 인자로 던져줄 수도 있다.



