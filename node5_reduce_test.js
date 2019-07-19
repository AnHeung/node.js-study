const arr = ["9","2","1","5","7"];

const result = arr.map(v=>v+"값");

const reduceVal = arr.reduce((acc, [a,b])=>a+b, {});



console.log("arr : " , arr);
console.log("result : " , result);
console.log("reduceVal : " , reduceVal);


const splitVal = "JSESSIONID.7b18648f=node01auvzdj2g8r9a1f46amp14i4ak4.node0; jenkins-timestamper-offset=-32400000; screenResolution=1200x1920; hudson_auto_refresh=false; mycookie=test; JSESSIONID.4a93a4c8=node0zknldc0yj1rz1grcwmu7phwzn19.node0";

console.log(splitVal.split(';').map(v=>v.split('=').map(v=>v.split('.'))));



// const sum = arr
// .map((v)=>v+"값")
// .reduce((acc,[key,value])=>{
//     console.log('acc : ' , acc);
//     console.log('key :' , key);
//     console.log('value :' , value);

//     acc[key] = value;
//     return acc;
// }, {});

// console.log(sum);

// let values = [1,2,3,6,7,5,3,3,2,1,6];

// //<<< ...은 전개 연산자(spread operator) 

// let uniqueValues = [...new Set(values)]; 

// console.log(uniqueValues);

// let users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
//   ];

//   let uTable = users.reduce((acc, it) =>({...acc, [it.id]: it}), {})

// console.log(uTable);

// const {a,b ,...z} = {a:1, b:2 ,c:3, d:4};

// console.log(a);
// console.log(b);
// console.log(z);