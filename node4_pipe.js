const fs = require('fs');

const readPath = './readme.txt';
const writePath = './writeme5.txt'; //없는 path면 생성해준다.

const readStream = fs.createReadStream(readPath);
const writeStream = fs.createWriteStream(writePath);

readStream.pipe(writeStream);


//readStream 으로 파일을 읽고 그 스트림을 전달받아 writeStream으로 파일을 쓴다
//파일복사와 비슷한데 스트림끼리 연결한다는걸 pipe라 표현함.
//노드 8.5버전전까진 이방식으로 파일복사가 이루어졋음.


