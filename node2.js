// get 으로 통신시

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === xhr.DONE){
//         console.log(xhr.responseText);
//     }else{
//         console.error(xhr.responseText);
//     }
// };

// xhr.open('GET', 'https://www.zerocho.com/api/get');
// xhr.send(); //요청전송

// // post 로 데이터까지 같이 전송할때 

// var xhr2 = new XMLHttpRequest();
// var data = {
//     name:'zerocho',
//     birth : 1994
// };

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === xhr.DONE){
//         console.log(xhr.responseText);
//     }else{
//         console.error(xhr.responseText);
//     }
// };

// xhr.open('POST', 'https://www.zerocho.com/api/post/json');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify(data));

// var formData = new FormData();

// formData.append('name', 'zerocho');
// formData.append('item', 'orange');
// formData.append('item', 'melon');

// xhr.open('POST', 'https://www.zerocho.com/api/post/formdata');
// xhr.send(formData);

const {odd, even} = require('./node2module');

const checkOddorEven = ((no)=>{
    if(no % 2){
        return odd;
    }else{
        return even;
    }
});

module.exports = checkOddorEven;