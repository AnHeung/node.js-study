setInterval(()=>{
    console.log('시작');
    try{
        throw new Error("서버 에러 발생"); //throw 하자마자 catch 문으로 빠져서 error : "서버 에러 발생" 이라는 값을 가지고 감
    }catch(err){
        console.log('catch 시작');
        console.error(err);
    }
}, 1000);

//interval로 테스트해서 아예 멈추는지 테스트 해봤지만 실제 멈추진 않고 계속 반복됨.

