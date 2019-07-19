const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', ()=>{
    console.log('이벤트 1 ');
});

myEvent.on('event2', ()=>{     // 'on'  << 이벤트 이름 및 이벤트 발생시의 콜백을 연결해주는 메소드
    console.log('이벤트 2');
});

myEvent.on('event2', ()=>{
    console.log('이벤트2 추가');
});

myEvent.emit('event1'); //'emit' 이벤트 호출 메소드 이름으로 콜백 실행 
myEvent.emit('event2');

myEvent.once('event3', ()=>{  //한번만 실행되는 이벤트 두번해도 불리지 않음
    console.log('이벤트 3');
});

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4' , ()=>{
    console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = ()=>{
    console.log('이벤트 5');
};

myEvent.on('event5' , listener);
myEvent.removeAllListeners('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));