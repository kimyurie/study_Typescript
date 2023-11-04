// [ 타입을 미리 정하기 애매할 때 (union type, any, unknown) ]
// 문자 or 숫자 들어올 수 있는 변수는 어떻게?
// Union Type (타입2개이상 합친 새로운 타입 만들기)
var 회원 = 'kim';
// 문자 or 숫자 들어올 수 있는 array/object 타입지정은?
var 회원들 = [1, '2', 3];
var 회원들2 = { a: 123 };
// any 타입은 모든 자료형 허용해줌
// (=> '타입실드 해제 문법'이다 즉, 일반 js 변수로 만들고 싶을 때 쓰기)
var d;
d = 123;
d = true;
// unknown 타입도 모든 자료형 허용해줌
var f;
f = 123;
f = {};
// unknown타입은 any보다 안전하다
// => unknown은 실드가 잘 발생하지만 any는 실드 해제 문법이므로 실드가 없어져서 안정성 떨어짐
// let 변수1 :string = f; // f는 object이기 때문에 오류 발생 (unknown)
var 변수2 = d; // d는 오류 안남(any)
// 타입스크립트의 엄격함에 대해
// - 간단한 수학연산도 타입 맞아야함
// => 무조건 숫자 타입만 가능
var g;
// g - 1 // g가 숫자 타입이 아니므로 오류 발생 (unknown은 number타입 아님)
// (중요!) 타입 엄격하게 지켜야 한다
var h;
// 아래처럼 왜 타입 맞는데 +1이 안되는지?
// h + 1;  // 오류 발생
// => 이유 :
// string타입 + 1 (허용)
// number타입 + 1 (허용)
// string|number타입 + 1 (안됌) // Union타입은 새로운 타입 만들어내는 것이므로
// 변수가 1인데 왜 오류 발생?
var i = 1;
// i - 1; // 오류 발생 
// => 이유 : 숫자타입이 아니기 때문
// 나중에 Narrowing / Assertion 배워서 엄격하게 코드짜면 된다
// [과제]
// 1. 다음 변수 4개에 타입을 지정해봅시다.
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다. 
var user = 'kim';
var age2 = undefined;
var married = false;
var 철수2 = [user, age2, married];
// 2. 학교라는 변수에 타입지정해보십시오.
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
