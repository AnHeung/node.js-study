const zlib = require('zlib');

const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt');

const zlibStream =  zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');

readStream.pipe(zlibStream).pipe(writeStream);
//버퍼 데이터가 전달되다 gzip압축을 거치고 그뒤 파일로 쓰여지는 과정