const buffer = Buffer.from('나를 버퍼로 바꾸셈'); //문자열을 버퍼로 변경

console.log('buffer', buffer);
console.log(`from : ${buffer.toString()}`); //버퍼를 다시 문자열로
console.log(`from : ${buffer.length}`);


const array = [Buffer.from('띄엄') , Buffer.from('띄엄'),  Buffer.from('띄어쓰기')];

const buffer2 = Buffer.concat(array);

console.log(`concat() :  ${buffer2.toString()}`);

const buffer3 = Buffer.alloc(5); //빈 버퍼생성 인자값으로 해당크기의 버퍼 설정가능

console.log('alloc(5)' , buffer3); 



