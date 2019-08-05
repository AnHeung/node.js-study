const util = require('util');

const crypto = require('crypto');

const dontUserMe = util.deprecate((x,y)=>{console.log(`x+y = ${x+y}`)}, '사용금지 deprecated');

dontUserMe(1,2);

const randomBytePromise = util.promisify(crypto.randomBytes);

crypto.randomBytes(64, (err,buf)=>{
    console.log('crypto randombyte : ' ,buf.toString('base64'));
    console.log('error : ' , err);
})

randomBytePromise(64)
.then(buf=>{
    console.log('randombytePromise : ' , buf.toString('base64'));
})
.catch((err)=>{
    console.log(err);
});

const returnfuc = (x,y)=>x+y;

const promiseReturn = util.promisify(returnfuc);

promiseReturn(1,2).then(data=>console.log(console.log('data : ' , data)));

