
const path = require('path');
const string = __filename;

// console.log(`string : ${string}`); //풀경로
// console.log(`path.sep : ${[path.sep]}`); //경로 구분자
// console.log(`path.delimiter : ${[path.delimiter]}`); //환경변수 구분자
// console.log(`path.basename : ${[path.basename(string)]}`); //실행되는 파일이름
// console.log(`path.extname : ${[path.extname(string)]}`); //확장자 이름
// console.log(`path.dirname : ${[path.dirname(string)]}`); //실행 경로
// console.log(`path.parse : ${[path.parse(string)]}`); //파일 경로를 root, dir ,base,ext,name으로 분리함.
// console.log(`path.format : ${[path.format({  //한 경로로 합체
//     dir: 'C:\\users\\dev',
//     name: 'path',
//     ext : '.js'
// })]}`);

// console.log(`resolve :  ${path.resolve(__dirname)}`);


console.log('string :' ,string); //풀경로
console.log('path.sep : ', path.sep); //경로 구분자
console.log('path.delimiter :' , path.delimiter); //환경변수 구분자
console.log('path.basename :' , path.basename(string)); //실행되는 파일이름
console.log('path.extname :' , path.extname(string)); //확장자 이름
console.log('path.dirname :', path.dirname(string)); //실행 경로
console.log('path.parse :', path.parse(string)); //파일 경로를 root, dir ,base,ext,name으로 분리함.
console.log('path.format :',path.format({  //한 경로로 합체
    dir: 'C:\\users\\dev',
    name: 'path',
    ext : '.js'
}));

console.log('resolve : ' , path.resolve(__dirname + '/a'));
console.log('join : ' , path.join(__dirname + '/a'));

