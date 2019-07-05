const {odd, even} = require('./node2module');
const checkNum = require('./node2')

const checkStringOddOrEven = ((str)=>{
    if(str.length % 2){
        return odd;
    }else{
        return even;
    }
})

console.log(checkNum(9));
console.log(checkStringOddOrEven('hellos'));