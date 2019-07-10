const crypto = require('crypto');

console.log('base64 : ' ,
 crypto.createHash('sha512')
.update('비밀번호') //변환할 문자열
.digest('base64')); //인코딩 base64,hex ,latin1이 주로 사용되는데 base64가 문자열길이가 가장짧아 애용

console.log('hex' , crypto.createHash('sha512').update('다른 비밀번호').digest('hex'));

console.log('base64 : ' , crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));