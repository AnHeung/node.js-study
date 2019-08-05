const fs = require('fs');
const util = require('util');

let value = 0;

console.log('시작');

let path = './readme.txt';

// fs.readFile(path, (err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log('1번',  data.toString());
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             throw err;
//         }
//         console.log('2번', data.toString());

//         fs.readFile(path, (err,data)=>{
//             if(err){
//                 throw err;
//             }
//             console.log('3번' , data.toString());
//         })
//     })
// })

// const promise2 = new Promise((res,rej)=>{
//     fs.readFile('./readme.txt',(err,data)=>{
//         if(err){
//             rej(err);
//         }
//         value++;
//         res(` 순서 : ${value}  값: ${data.toString()}`);
//     });
// }).then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         fs.readFile('./readme.txt',(err,data)=>{
//             if(err){
//                 rej(err);
//             }
//             value++;
//             res(` 순서 : ${value}  값: ${data.toString()}`);
//         });
//     })
// }).then((data)=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         fs.readFile('./readme.txt',(err,data)=>{
//             if(err){
//                 rej(err);
//             }
//             value++;
//             res(` 순서 : ${value}  값: ${data.toString()}`);
           
//         });
//     })
// }).then((data)=>{
//     console.log(data);
//     console.log('끝');
// })
// .catch((err)=>console.log(err));


const testFun = async ()=>{

    const time2 = await readFiles();
    const time3 = await readFiles();
    const time4 = await readFiles();
}
const readFiles = () => {

    fs.readFile(path ,(err,data)=>{

        console.log(`readme 값  : ${data.toString()} + value : ${value}`);

        if(err){
            throw err;
        }
        value++;
        if(value == 3) return console.log('끝');

        return new Promise((res)=>{
            res(`순서 : ${value}  값: ${data.toString()}`);
        });
    });
};
testFun();