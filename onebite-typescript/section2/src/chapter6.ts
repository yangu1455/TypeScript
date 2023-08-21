// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar1 = 10;
// anyVar1 = "hello"; // 오류 발생!

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
// 이런식으로 아무 타입이나 들어올수 있음.
// 메서드도 사용 가능

// let anyVar: any = 10; // 저 위에서 함수로 선언을 했는데..~
// anyVar = "hello";

// let num: number = 10;
// num = anyVar;

// 자바스크립트처럼 타입 검사를 받지 않는 타입이기 때문에
// 되도록이면 쓰지 않는 것이 좋다.


// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// 여기까지는 any와 다르지 않음

// 하지만 반대로는 안됨
let num: number = 10;

// num = unknownVar; // 오류 !

// 이와 같은 어떤 연산에도 참여할 수 없고, 메서드도 사용할 수 없다.
// unknownVar * 2 // 오류!

// 이런식으로 타입 정제를 해주었을 때 사용할 수 있음
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}