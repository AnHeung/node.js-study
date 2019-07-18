const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme3.txt');

writeStream.on('finish', ()=>{
    console.log('쓰기 완료');

    fs.readFile('./writeme3.txt', (err,data)=>{

        if(err){throw err};

        console.log(`data :  ${data.toString()}`);
    });

});

writeStream.write('이 글을 씁니다 \n');
writeStream.write('한번 더 씁니다 \n');
writeStream.end();
