// [ 타입스크립트 기본 타입 정리(primitive types) ]

// 변수에 타입 지정 가능 = 변수에 실드 씌우는 것임
let a :string = 'kim';
// a = 123; // 타입이 실수로 변경될 때 에러내줌

let age :number = 50;
let answer :boolean = true; 
// 위 외에도 undefined, null 타입으로도 지정 가능

// 변수 하나에 여러자료 넣고 싶으면 array 자료형 쓰기
// array자료에 아래와 같이 타입지정도 가능 (문자만 담긴 array 가능이라는 뜻)
let member :string[] = ['kim', 'park']

// array에 숫자랑 문자 동시에 넣고 싶으면? 나중에 배울 union타입 쓰면 된다

// 변수 하나에 여러자료 넣고 싶으면 object 자료형 써도 가능
// object 자료에도 아래와 같이 타입지정도 가능 
// (이 변수엔 object만 들어올 수 있으며 member1, member2 옆엔 string이 와야 한다는 뜻)
let member2 :{member1 : string, member2: string} = { member1 : 'kim', member2 : 'park'}


// 근데 타입지정 모든 변수에 다 쓸 필요없고 원래 자동으로 되서 타입지정 문법 생략해도 된다
let ccc = 'kim';

// [과제]
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let aa :string = '유리';
let bb :number = 1;
let area :string = '경기';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let music :{song : string, singer : string}= {song : 'circle', singer:'post-malone'}

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project :{people :string[], days : number, started : boolean} = {
    people : ['kim', 'park'],
    days : 30,
    started : true,
}
