var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + '더하기'+  num2 + '는 \''+result + '\'';
console.log(string1);

const num3 = 1;
const num4 = 2;
const result2 = 3;

const str = `${num3}더하기 ${num4} 는 '${result2}'`;
console.log(str);

var sayNode = function(){
    console.log('node');
}

var es = 'Es';

oldObj = {

    sayJS: function(){
            console.log('JS');
    },
    sayNode: sayNode
};
oldObj[es+6] = 'Fantastic';

oldObj.sayNode();
oldObj.sayJS();
console.log(oldObj.Es6);

const newObj = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6] : 'fantastic'
};

newObj.sayNode();
newObj.sayJS();
console.log(newObj.Es6);

function add1(x,y){
    return x+y;
}

const add2 = (x,y)=>{
    return x+y;
}

const add3 = (x,y)=>x+y;

const add4 = (x,y)=>(x+y);

function not(x){
    return !x;
}

const not2 = x=>!x;

const add5 = (x,y)=>x/y;


var relationship = {
    name:'zero',
    friend: ['1','2','3'],
    logFriends: function(){
        var that = this;
        this.friend.forEach(function(friend){
            console.log(that.name , friend);
        });
    }
};

relationship.logFriends();

const relationship2  = {
    name :'zero',
    friends: ['1','2','3'],
    logFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name, friend);
        });
    }
}

relationship2.logFriends();


var candyMachine = {
    status : {
        name:'node',
        count:5
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
}


console.log(candyMachine.getCandy());

const {getCandy, status:{count}} = candyMachine;

console.log(getCandy);

// var array = ['nodejs',  {}, 10, true];

// var node = array[0];
// var obj = array[1];
// var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node,obj, , bool] =array; //대량으로 값 assign 할때 유용

const condition = true;
const promise = new Promise((resolve, reject) =>{
    if(condition){
        resolve("성공")
    }else{
        reject("실패")
    }
})
.then((message)=>{
    console.log(message)
    return new Promise((resolve,reject)=>{
        if(!condition){
            resolve("성공2")
        }else{
            reject("실패2")
        }    
    })
})
.then((message)=>console.log(message))
.catch((err)=>{
    console.error(`실패햇습니다  ${err}`);
});


const isOk = true;

const promise2 = new Promise((res, rej)=>{

    const data = "testVal";

    if(isOk){
        res(`${data} 테스트값`);
    }else{
        rej('오류1');
    }
}).then((msg)=>console.log(msg)
).catch((err)=> console.error(err));


const promise3 = Promise.resolve(1);
const promise4 = Promise.resolve('성공2');

Promise.all([promise3 , promise4])
    .then((result)=>console.log(result))
    .catch((err)=>console.error(err));