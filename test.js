const fs = require('fs');
let folderPath = './folder'
let filePath = folderPath + '/file.js';
let newFilePath = folderPath + '/newFile.js';
let accessStatus = fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK;

async function fileMake() {

    let accesss = await access()
    .catch((err) => {
        console.log(`있데 ${err}`); 
        return;
    });

    let mkdirr = await makeDir();

    if(mkdir instanceof Error){
        return;
    }
    let opens = await open();
}

function access() {
    return new Promise((res, rej) => {

        fs.access(folderPath, accessStatus, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.log('생성 ㄱㄱ');
                    res('생성 ㄱㄱ');
                }
            } else {
                console.log('이미 있음');
                rej('잇엉');
            }
        })

    });
}

function makeDir() {
    return new Promise((res, rej) => {
        fs.mkdir(folderPath, (err) => {
            if (err) {
                rej('파일생성 실패')
            }else{
                res('성공');
            }
        })
    })
}

async function open(){
    return fs.open(filePath , (err)=>{
        if(err){
            console.log('open err');
            return err;
        }else{
            return "성공";
        }
    })
}

// fileMake();
// console.log('test');

const numberList = [1,2,3,4,5,6,7,8,9,10];

const jsonList = [{age : 10 , name : '안' , power : ['15', '10']} , {age : 13 , name : '박' , power : ['11','12']} , {age : 10 , name : '전' , power : ['20','21']}]

const initVal = 0;

// const totalResult = numberList.reduce((initValue , currentValue, currentIdx, array)=>{
//     return initValue + currentValue;
// },initVal);

const jsonResult = jsonList.reduce((initValue , currentValue , currentIdx , array)=>{
        return [...initValue , ...currentValue.power];
}, []);

console.log(jsonResult);




// fs.access(folderPath , accessStatus , (err)=>{

//         if(err){

//             if(err.code === 'ENOENT'){
//                 console.log('폴더 없음');
//                 fs.mkdir(folderPath , (err)=>{
//                     if(err){
//                         throw err;
//                     }
//                     console.log('폴더 생성 성공');

//                     fs.open(filePath, 'w' ,(err,fd)=>{
//                         if(err){throw err};
//                         console.log('빈 파일 만들기 성공', fd);


//                         fs.rename(filePath, newFilePath, (err)=>{
//                             if(err){throw err};
//                             console.log('이름 바꾸기 성공');
//                         });
//                     })
//                 })
//             }

//         }else{
//             console.log('이미 있다.');
//         }
// });


// const accessPromise = new Promise((res, rej) => {

//     fs.access(folderPath, accessStatus, (err) => {

//         if (err) {
//             if (err.code === 'ENOENT') {
//                 console.log('폴더없음');
//                 res();
//             }
//         } else {
//             rej('이미 있음');
//         }
//     });
// }).then(() => {

//     return new Promise((res, rej) => {

//         fs.mkdir(folderPath, (err) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 console.log('폴더 생성성공');
//                 res();
//             }
//         })
//     });
// })
//     .then(() => {

//         return new Promise((res, rej) => {
//             fs.open(filePath,'w',(err) => {
//                 if (err) {
//                     rej(err)
//                 } else {
//                     console.log('파일 생성');
//                     res();
//                 }

//             });
//         })
//     })
//     .then(() => {

//         return new Promise((res, rej) => {
//             fs.rename(filePath, newFilePath, (err) => {

//                 if (err) {
//                     rej(err)
//                 } else {

//                     console.log('이름 변경 성공 ');
//                 }
//             });
//         });
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// function getFirstUser(userName) {
//     return getUser(userName).then((userData) => {
//         console.log(`getFirstUser userData : ${userData[0]}`);
//         return userData[0];
//     }).catch((err) => {
//         console.error(err);
//         return {
//             errMsg: err
//         };
//     });
// }

// async function getFirstUserAsync(userName){

//     let userData = await getUser(userName).catch((err)=>{
//         console.log(err);
//         return;
//     });
//     // console.log(`getFirstUserAsync userData : ${userData[0].toString()}`)
//     // return userData[0];
//     return userData;
// }

// function getUser(userName) {

//     let userData = ['흥', '섭'];

//     return new Promise((res, rej) => {

//         if (typeof userName === 'number') {
//             rej(new Error('숫자 타입 안됨'));
//         } else {
//             userData.push(userName);
//             console.log(`getUser userData : ${userData.toString()}`);
//             res(userData);
//         }
//     });
// }

// async function wait(){

//     return new Promise((res)=>{
//        setTimeout(()=>{
//            res(10);
//        } , 1000);
//     });
// }

// function f(){

//     console.log(`넘어온 값 : ${wait()}`);
// }


// //에러발생시 then으로 들어가서 재처리 가능
// new Promise((res,rej)=>{
//     throw new Error('에러발생');
// }).catch((err)=>{
//     console.log(`err 발생 : ${err}`);
//     return err;
// }).then((data)=>{
//     console.log(`들어온 data : ${data}`);
// });

// //에러발생시 catch에서 빠져나감
// new Promise((res,rej)=>{
//     throw new Error('에러발생');
// }).then((data)=>{
//     console.log(`들어온 data : ${data}`);
// }).catch((err)=>{
//     console.log(`err 발생 : ${err}`);
//     return err;
// });

// new Promise((res, rej) => {

//     setTimeout(() => {
//         try {
//             throw new Error('wow error');
//         } catch (err) {
//             rej(err);
//         }
//     }, 1000);

// }).catch((err) => {
//     console.log(`err 발생 : ${err}`);
// });

// new Promise((res, rej) => {

//     setTimeout(() => {
//         rej(new Error('wow error'));
//     }, 1000);

// }).catch((err) => {
//     console.log(`err 발생 : ${err}`);
// });

// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         throw new Error('하하');
//     }, 1000);
// }).catch((errr=>{
//     console.log(`errrrr : ${errr}`);
// }));


// new Promise((res,rej)=>{
//     throw new Error('errorororo');
// }).catch((err)=>{
//     console.log(`err 발생 : ${err}`);
// });



// getFirstUser(1);
// getFirstUserAsync(1);

// const accessAsync = async ()=>{

//     try{

//         await new Promise((res, rej)=>{

//             fs.access(folderPath, PermissionStatus , (err)=>{

//                 if(err){
//                     if(err.code === 'ENOENT'){
//                         console.log('폴더없음');
//                         res();
//                     }
//                 }else{
//                     rej(new Error(`파일 access error ${error}`));
//                 }
//             })
//         });

//         await new Promise(res,rej=>{

//             fs.mkdir(folderPath , (err)=>{
//                 if(err){
//                     rej(new Error(err));
//                 }
//                 console.log('폴더생성 완료');
//                 res();
//             })

//         });


//     }catch(error){
//         console.error(`error :  ${error}`);
//     }
// }