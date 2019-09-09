const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=0010010000#anchor');

console.log('new URL() :', myURL);
console.log('url.format() :' , url.format(myURL));
console.log('---------------------------');

const parsedURL = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=0010010000#anchor');

console.log('parseUrl  :', parsedURL);
console.log('format URL :' ,url.format(parsedURL));

