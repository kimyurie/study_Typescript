let 이름 :string = 'kim';

// array 타입 지정은 :[]
// 아래 변수엔 string 담긴 array만 들어올 수 있다
let 어레이 :string[] = ['kim', 'park'];  


// object 타입 지정
let 오브젝트 :{ name : string } = { name : 'kim' }
// 특정 속성이 선택사항이면 아래처럼
// name이라는 속성이 들어올 수도 안들어 올수도 있음을 나타낸다 (안들어와도 에러안남)
let 오브젝트2 :{ name? : string } = { }


// 다양한 타입이 들어올 수 있게 하려면 Union type
let 다양하게 :string | number = '123';


// 타입은 변수에 담아쓸 수 있음 (일반적으로 앞 대문자로 많이씀)
type Name = string | number;
let 타입 :Name = 123;


// 함수에 타입지정 가능
// 이 함수는 파라미터로 number, return 값으로 number
function 함수(x :number) :number{ 
    return x * 2
}


// array에 쓸 수 있는 tuple 타입
// 아래 코드에서 첫째는 number, 둘째는 boolean 무조건
type Member = [number, boolean];
let john:Member = [123, true];


// object에 타입지정해야 할 속성이 너무 많으면 type 키워드로 변수에 담아 사용
type MyObject1 = {
    name? : string,
    age : number
}
let 재민 :MyObject1 = { 
    name : 'kim',
    age : 50
}

type Myobject2 = {
    // 글자로 된 모든 object 속성의 타입은 :string
    [key :string] : number,
}
let 철수 :Myobject2 = { 
    age : 50, 
    weight : 100,
}


// class도 타입 지정 가능
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}
