const fs = require('fs');

// fs.writeFile('./writeme2.txt', '글이 입력됩니다.', (err) => {
//     if (err) {
//         throw err;
//     }

//     fs.readFile('./writeme2.txt', (err, data) => {

//         if (err) {
//             throw err;
//         }
//         console.log(`data ${data.toString()}`);
//     });

// });




// new Promise((res,rev)=>{

//     let path = './writeme3.txt';

//     fs.writeFile(path, '내용없음 생성' , (err)=>{
//         res(path);
//     })

// })
// .then((path)=>{
//     console.log(`넘어온 path : ${path.toString()}`);

//     fs.readFile(path , (err,data)=>{
//         console.log(`txt 값: ${data.toString()}`);
//     });
// })
// .catch((err)=>{
//     console.error(err);
// });


const asyncTest = async ()=>{

    await write();
    await read();
};

const write = ()=>{
    fs.writeFile('./writeme4.txt' ,'내용없음', (err)=>{
        if(err){
            throw err;
        }
    })
};

const read = ()=>{
    fs.readFile('./writeme4.txt' , (err, data)=>{
        if(err){
            throw err;
        }
        console.log(`data :  ${data.toString()}`);
    });
}


asyncTest();


