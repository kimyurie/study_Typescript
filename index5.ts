function 내함수(x : number|string){
// Type이 아직 하나로 확정되지 않았을 경우
// Type Narrowing 써야한다 
// 즉, 어떤 변수가 타입이 아직 불확실하면 if문 등으로 
// Narrowing 해줘야 조작 가능 
    if (typeof x === 'string'){
        return x + '1'
    }else {
        return x + 1
    }
}

console.log(내함수(123));

function 내함수2(x : number | string){
    let array :number[] = [];
    if (typeof x === 'number'){
        array[0] = x;
    }
}

// [Narrowing 주의점!]
// if문 썼으면 끝까지 써야 안전
// else, else if 안쓰면 에러로 잡아줌

// [Narrowing으로 판정해주는 문법들]
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
// => 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌


// Narrowing 귀찮으면 assertion 문법
function 내함수3(x : number | string){
    let array :number[] = [];
    // assertion 문법(타입 덮어쓰기)
    array[0] = x as number; // x를 number로 덮어써주세요~
}

내함수3(123);

// [assertion 문법의 용도]
// 1. Narrowing 할 때
let aaa :string = 'kim';
// aaa as number; // 에러남 
// (타입 애매한 애들(union 타입) 확정지을 때만 쓰지 타입을 a에서 b로 변경은 안됌!)

// 2. 무슨 타입이 들어올지 100% 확실할 때
// 위의 내함수3(123)에 number가 들어올 걸 알고 있는것처럼
// 내함수3('123')으로 써도 오류 안나듯이 assertion은 버그 추적이 안됌
// => 굳이 assertion 안쓰고 대부분 위에 if문 쓴다
// 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을 때 비상용으로 쓰기



// 과제
// 1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(x :(number | string)[]){
    let 클리닝결과 :number[]= [];

    x.map((e) => {
        if(typeof e === 'string'){
            클리닝결과.push(Number(e))
        }else{
            클리닝결과.push(e)
        }
    })
   
    return 클리닝결과;
}

console.log(클리닝함수( ['1', 2, '3'] ) )

// 2. 다음과 같은 함수를 만들어보십시오.
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return

function Teacher(a:{subject : string | string[]}){
    if (typeof a.subject === 'string'){
        return a.subject;
    }else if (Array.isArray(a.subject)){
        return a.subject[a.subject.length - 1];
    }else{
        return '없음';
    }
}

console.log(Teacher( { subject : 'math' } ) )
console.log(Teacher( { subject : ['science', 'art', 'korean'] } ) )


