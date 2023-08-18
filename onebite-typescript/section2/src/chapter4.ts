// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능하다.
// 하지만 다른 위치라면 중복된 이름으로 여러개의 별칭을 선언해도 상관없다.

// 인덱스 시그니처(Index Signature)
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  // 반드시 포함해야 하는 프로퍼티는 직접 명시해줌
  Korea: number;
};

// 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 
// 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 합니다. 
// 따라서 다음과 같이 서로 호환되지 않는 타입으로 설정하면 오류가 발생합니다.
// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: string; // 오류!
// };