// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
// <> 이런걸 열고 여기다가 다른 타입을 집어넣는 것을 제네릭 문법이라고 한다.
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의
// let multiArr = [1, "hello"];
// number 또는 string이 들어가는 배열!
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr : number[][] = [
  [1, 2, 3], 
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = ["2", 1, true]; 뭐 이러면 오류남

// 튜플은 컴파일 해보면 결국 배열로 변환이 되는걸 확인할 수 있는데
// 그렇기 때문에 push, pop을 이용해서 길이를 무시하고 요소를 추가하거나 삭제할 수 있다.
// 그렇기 때문에 각별한 주의를 요한다.

// 튜플은 이런 경우에 오류를 발생시켜서 수정할 수 있게 해준다.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], // 오류 발생
];
