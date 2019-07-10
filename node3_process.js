// const secretId = process.env.SECRET_ID;
// const secretCode = process.env.SECRET_CODE;

// console.log(`secretId =  ${secretId} secretCode = ${secretCode}`);

// setImmediate(()=>{
//    console.log('immediate setImmediate'); 
// });

// process.nextTick(()=>{
//     console.log('immediate nextTick');
// });

// setTimeout(()=>{
//     console.log('timeout');
// }, 0);


// Promise.resolve().then(()=>console.log('promise'));

let i = 1;

setInterval(()=>{
    if(i === 5){
        console.log('process exit');
        process.exit();
    }
    console.log(`처리되고 있는 값 : ${i} `);
    i++;
} , 1000);
