const fs = require('fs');

new Promise((res,rev)=>{

    let path = './streamReadme.txt';
    
    fs.writeFile(path, '저는 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라 함.', (err)=>{
        if(err){throw err};
        res(path);
    });
})
.then((path)=>{

    const readStream = fs.createReadStream(path, {highWaterMark : 16});

    const data = [];

    readStream.on('data', (chunk)=>{
        data.push(chunk);
        console.log('data : ' , chunk, chunk.length);
    });
    
    readStream.on('end', ()=>{
    console.log('end : ' , Buffer.concat(data).toString()); 
    });
    
    readStream.on('error',  (err)=>{
        console.log('err : ' , err);
    });

})
.catch((err)=>{
    console.log('catcherr : ' ,err);
})

