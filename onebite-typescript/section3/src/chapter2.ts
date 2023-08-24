/**
 * Unknown 타입
 */

function unknownExam() {
  // Up Casting
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // Down Casting - 불가
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 불가능, 모순...
 * 모든 집합의 부분 집합이 되는 like 공집합...
 * 어떤 값도 저장되어선 안될 때 쓰면 굿
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // Up Casting
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // Down Casting - 불가
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  // Up Casting
  // void 타입은 undefined의 슈퍼타입이다.
  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  // Down Casting이지만
  // any 타입은 전부 받아!
  // 타입계층도를 전부 무시하는 치트키 타입이라고 생각하면 됨!
  // 그래서 앵간해서는 사용하지 않는 것이 좋다~
  undefinedVar = anyVar; 

  // never 타입은 예외적으로 어느 타입도 Down Casting 할 수 없는 공집합이기 때문에
  // any 타입도 불가하다!
  // neverVar = anyVar;
}