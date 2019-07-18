// import {fs} from 'promise-fs';

const fsp = require('promise-fs');

fsp.readFile('./readme.txt')
.then(content=>console.log(content.toString()))
.catch(err=>console.log(err));

