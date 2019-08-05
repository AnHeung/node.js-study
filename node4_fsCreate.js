//access로 폴더나 파일에 접근  가능한지 여부 체크
//상수 F_OK  파일존재 여부 , R_OK 는 일기 권한 여부 , W_OK는 쓰기 권한 여부
//만약 파일이나 폴더 권한이 없으면 err 발생 
//파일 폴더가 없을때 발생하는 err 코드는 ENOENT
//mkdir() 은 이미 폴더가 있으면 err발생하므로 access 로 체크가 중요
//open은 fd<<<(파일 아이디) 변수를 가져오는 메소드로 파일이 없으면 파일 생성 후 그 아이디를 가져옴
//가져온 아이디를 사용해 fs.read(), fs.write() 를 읽거나 쓸 수 있습니다. 
//읽기 r , 쓰기 w 로 설정가능 w의 경우 없으면 새로 만듬
//rename 은 파일 이름을 바꾸는 메서드 기존 파일 위치와 새 파일 위치 지정만 해주면됨.
const fs = require('fs');

fs.access('./folder' , fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK ,(err)=>{
    if(err){
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            fs.mkdir('./folder', (err)=>{
                if(err){
                    throw err;
                }
                console.log('폴더 만들기 성공');
                //fs.open(경로, 옵션 , 콜백)
                fs.open('./folder/file.js',  'w', (err,fd)=>{
                    if(err){
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공' ,fd);

                    fs.rename('./folder/file.js', './folder/newfile.js', (err)=>{
                        if(err){
                            throw err;
                        }

                        console.log('파일 이름 바꾸기 성공');
                    });
                });
            });

        }else{
            throw err;
        }

    } else{
        console.log('이미 폴더 있음');
    }
});


// new Promise((res,rev)=>{

//     fs.access('./folder2', fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK , (err)=>{
//         if(err.code !== 'ENOENT'){
//             rev(err);
//         }else{
//             console.log('폴더 없음');
//             res();
//         }
//     });
// })
// .then(()=>{

//     return new Promise((res,rev)=>{

//         fs.mkdir('./folder2', (err)=>{
//             if(err){
//                 rev(err);
//             }else{
//                 console.log('폴더 생성 성공');
//                 res();
//             }
//         })  
//     });
// })
// .then(()=>{

//     return new Promise((res,rev)=>{

//         fs.open('./folder2/file.js', 'w', (err,fd)=>{
//             if(err){
//                 rev(err);
//             }else{
//                 console.log('빈 파일 만들기 성공', fd);
//                 res();
//             }
//         });
//     });
// })
// .then(()=>{

//     return new Promise((res,rev)=>{

//         fs.rename('./folder2/file.js', './folder2/file2.js', (err)=>{

//                 if(err){
//                     rev(err);
//                 }else{
//                     console.log('폴더 이름 변경 성공');
//                 }

//         });

//     });
// })
// .catch((err)=>{
//     console.log(`catch error : ${err}`);
// });



const makeFolder = async () => {

    const folderPath = './folder2';
    const filePath = folderPath + '/file.js';
    const renameFileName = folderPath + '/rename.js';

    console.log(`folderpath : ${folderPath} filePath : ${filePath} rename : ${renameFileName}`);

    const permissionVal = fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK;

    try {

        await new Promise((res,rej)=>{
            fs.access(folderPath, permissionVal, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.log('폴더없음');
                    res();
                }
            } else {
                rej (new Error(`파일 access 에러났음 : ${err}`));
            }
        })});

        await new Promise((res,rej)=>{
            fs.mkdir(folderPath, (err) => {
            if (err) {
                rej(new Error(err));
            }
            console.log('폴더 생성 완료');
            res();
        })});


        await new Promise((res,rej)=>{
            fs.open(filePath, 'w', (err, fd) => {
            if (err) {
                rej(new Error(err));
            }
            console.log('파일 생성 완료', fd);
            res();
        })});

        await new Promise((res,rej)=>{
            fs.rename(filePath, renameFileName, (err) => {
                if (err) {
                    rej(new Error(err));
                }
                console.log('이름 바꾸기 성공');
            })
        });
    } catch (error) {
        console.error('catch : ', error);
        return;
    }
}

makeFolder();