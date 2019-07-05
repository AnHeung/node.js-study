const string = 'abc';

const number = 1;

const boolean = true;

const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};

console.time('전체 시간');
console.log('평범한 로그')
console.log(string, number, boolean);

console.error('에러 메세지는 console.error에 담으시오');

console.dir(obj, {colors : true , depth :2}); //2번째 인자는 콘솔에 색깔이 표시되서 보기좋음
                                             //depth는 기본값이 2이고 몇 단계까지 객체를 보여줄지 여부

console.time('시간측정');

for(let i = 0; i < 10000; i++){
    continue;
}
console.timeEnd('측정완료');

const b = (()=>{
    console.trace('에러위치 추정')
    //에러위치를 알려줌 보통은 에러발생시 위치를 알려줘서 잘 안쓰지만 안나올때도 있어도 그떄 사용하면 유용
})()

console.timeEnd('전체 시간');

