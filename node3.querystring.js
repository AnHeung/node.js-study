// const url = require('url');

// const querystring = require('querystring');

// const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

// const query = querystring.parse(parseUrl.query.stringify);

// // console.log(`querystring.parse() : ${query}`);
// console.log(query);
// // console.log(`query.parse() ${query}`);
// console.log(`querystring.stringify() : ${querystring.stringify(query)}`);

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));