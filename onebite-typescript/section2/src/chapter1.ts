// number
// :(콜론) 타입 => 타입 주석 (type annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;


// 임시로 null 값을 넣어놓고 싶을 때 쓰는 방법
// tsconfig.json에서 strictNullChecks 옵션을 false로!
// 임시로 오류가 나지 않도록 바꿔준다
// let numA: number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;

let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;