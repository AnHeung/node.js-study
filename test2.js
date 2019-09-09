// const a  = {
//     name : 'tom',
//     age : 10
// }

// const b = a;

// const c = {...a};

// c.name = 'jerry';

const original = { a: { b: 1 },anotherRandomValue: 11, anotherRandomArray: [22] };

// Always put the original with the spread operator first
const falseCopy = { ...original, a: { b: 2 } };

const cloneCopy = cloneObj(original);

const jsonCopy = JSON.parse(JSON.stringify(original));

console.log(original) // logs { a: { b: 1 }, anotherRandomValue: 42 }
console.log(falseCopy) // logs { a: { b: 2 }, anotherRandomValue: 42 }
console.log(jsonCopy) // logs { a: { b: 1 }, anotherRandomValue: 42 }
console.log(cloneCopy) // logs { a: { b: 1 }, anotherRandomValue: 42 }

original.anotherRandomValue = 88;
original.anotherRandomArray[0] = ':-(';

console.log(original) // logs { a: { b: 1 }, anotherRandomValue: 42 }
console.log(falseCopy) // logs { a: { b: 2 }, anotherRandomValue: 42 }
console.log(jsonCopy) 



// console.log(a===b);
// console.log(b===c);

// const original = {a: {b: 1}};

// const falseCopy = {...original};

// const deepCopyVal = JSON.parse(JSON.stringify(original));

// falseCopy.a.b = 2;

// console.log(falseCopy) // logs {a: {b: 2}}
// console.log(original) // also logs {a: {b: 2}} WTF!
// console.log(deepCopyVal) // also logs {a: {b: 2}} WTF!

// const originalArray = [1,2,3,4,5];

// const newArray = [...originalArray , ...originalArray];

// newArray[0] = 100;
// newArray[1] = 200;

// console.log(originalArray);
// console.log(newArray);

// const obj1 = {a:'abc' , b:'def'};
// const obj2 = { ...obj1 ,b: 123, c:456};

// console.log(obj1);
// console.log(obj2);

// const enterInfo ={name : 'John doe', phoneNum: '123-456-789'};
// const defaultInfo = {name:'N/A' , address:'n', phoneNum : '000-0000-0000', email : 'null'};

// const completedUserInfo = {...enterInfo , ...defaultInfo};

// console.log(completedUserInfo);

// var a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // expected output: [30,40,50]

// const obj1 = {
//     a: 'abc',
//     b: 'def',
//     c: 'hij',
//     d: 'klm'
// }

// const {c , d} = obj1;

// console.log(c,d);