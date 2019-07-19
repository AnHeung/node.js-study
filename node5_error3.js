process.on('uncaughtException' , err=>{
    console.log('예기치 못한 에러' , err);
});

setInterval(()=>{
    throw new Error('서버 고장내기');
}, 1000);

setTimeout(()=>{
    console.log('실행됩니다');
}, 2000);

//처리 못한 에러 발생시 이벤트 리스너가 실행되고 프로세스가 유지
//실제 setInterval은 에러가 낫지만 setTimeout은 동작함.
//사실 uncaughtException은 모든 에러를 처리하는것 같지만 최후의 수단으로만 사용하는게 좋음
//단순히 에러기록만 하고 process.exit()로 프로세스를 종료하는것이 더 좋음.

//서버 운영은 에러와의 싸움 모든 상황에 대비하고 에러발생시 철저히 기록(로깅)를 하는 습관을 들여야됌.

