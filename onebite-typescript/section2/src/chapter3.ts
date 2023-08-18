// object로 타입을 정의하게 되면
// 이것이 객체라는 정보 외에 속에 들어있는 프로퍼티나 메소드에 뭐가 있는지 알지 못한다. 

// 그래서 이렇게 중괄호를 이용해 객체 타입을 정의하게 되는데
// 이것을 객체 리터럴 타입이라고 한다.
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
}

// 이런식으로 타입스크립트는 객체의 구조를 기준으로 타입을 정의한다.
// = 구조적 타입 시스템
// 프로퍼티를 기준으로 타입을 결정하는 시스템
// = Property Based Type System

// C, Java의 경우
// 이름만을 기준으로 타입을 정의 하는 것 => 명목적 타입 시스템

let config: {
  // readonly로 재할당을 막을 수도 있다!
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";