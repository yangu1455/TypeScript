// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func2(): void {
  console.log("hello");
}

let a: void;
// void에는 다른 타입의 값은 담을 수 없고 오직 undefined만 담기 가능
a = undefined;
// tsconfig에서 strictNullChecks를 끄면 null 값도 담기 가능함
// a = null;


// never
// never -> 존재하지 않는
// 불가능한 타입

// 무한 루프
// func3처럼 정상적으로 종료될 수 없어서 반환값이 있는 것 자체가 모순적이다 할 때 never를 씀
function func3(): never {
  while (true) {}
}

// 의도적으로 오류를 발생시키는 함수 
// 프로그램 실행 도중에 에러 던져주고 프로그램이 정지될 것이기 때문에 never 타입으로!
function func4(): never {
  throw new Error();
}

let anyVar: any;

// 변수의 타입을 never로 정의하는 것도 가능!
let b: never;

// any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됩니다. 
// b = 1;
// b = null;
// b = undefined;
// b = anyVar;