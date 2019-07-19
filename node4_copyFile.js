const fs = require('fs');

fs.copyFile('readme.txt', 'writeme14.txt', (err)=>{
    if(err){
        return console.error(err);
    }
    console.log('복사 완료');
});

