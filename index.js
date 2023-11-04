var 이름 = 'kim';
// array 타입 지정은 :[]
// 아래 변수엔 string 담긴 array만 들어올 수 있다
var 어레이 = ['kim', 'park'];
// object 타입 지정
var 오브젝트 = { name: 'kim' };
// 특정 속성이 선택사항이면 아래처럼
// name이라는 속성이 들어올 수도 안들어 올수도 있음을 나타낸다 (안들어와도 에러안남)
var 오브젝트2 = {};
// 다양한 타입이 들어올 수 있게 하려면 Union type
var 다양하게 = '123';
var 타입 = 123;
// 함수에 타입지정 가능
// 이 함수는 파라미터로 number, return 값으로 number
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var 재민 = {
    name: 'kim',
    age: 50
};
var 철수 = {
    age: 50,
    weight: 100,
};
// class도 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
