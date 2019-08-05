const fs = require('fs');

const server = require('http')
.createServer((req,res)=>{
    fs.readFile('./bigfile.file', (err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });

    const readStream = fs.createReadStream('./bigfile.file');
    readStream.pipe(res);

})
.on('error' , (err)=>{
    console.log('err 발생 ',err);
})
.listen(3000 , ()=>{console.log('서버 대기중')});