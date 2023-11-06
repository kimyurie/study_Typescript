// [함수에 타입 지정하는 법 & void 타입]

function 함수(x :number) :number{ // 여기서 파라미터 x는 변수 작명이랑 똑같음 (변수만 만들면 :any 자동할당)
    return x * 2 // 리턴되는 값은 {왼쪽에 타입 지정
}

console.log(함수(30))

// 리턴할게 없을 경우 => void 타입 활용 가능
function 함수2(x :number) :void{
    1+1
}

// 함수() // js와 다른점 : 타입지정된 파라미터는 필수임 옆에 처럼 그냥 함수()하면 에러남

// 파라미터가 옵션일 경우에는 '파마미터변수? :타입' 형태로 사용

// (중요) ? 연산자는 들어올수도 있다~라는 뜻이긴 하지만
// '변수? :타입' = '변수 :number|undefined'

function 함수3(x :number | string) :void {
    // console.log(x+3) // x+3 에러나는 이유? 왼쪽타입이 정확히 숫자여야함
}




// [과제]
// 1.이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 
function sayHi(x? : string) {
    if (x) {
        console.log('안녕하세요 ' + x)
    } else{
        console.log('이름이 없습니다')
    }
}

console.log(sayHi());

// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
function count(x:string | number):number{
    return String(x).length;
}

console.log(count('245'));
console.log(count(9567));



// 3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

// 1-함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2-월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3-총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다

function marryPct(x :number,y:boolean,z:string):string | void{
    let score:number = 0;
    score += x + (y ? 500 : 0) + (z=='상' ? 100 : 0);

    if (score >= 600){
        return '결혼가능'
    }
}

console.log(marryPct(700, false, '중'))
console.log(marryPct(100, false, '상'))