// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// 직접 할당하지 않으면 0부터 자동할당
enum Role {
  ADMIN, // 0 할당(자동)
  USER,  // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

// 이런식으로도 반자동(?) 할당을 할 수 있다
// enum Role {
//   ADMIN = 10, // 10 할당 
//   USER,       // 11 할당(자동)
//   GUEST,      // 12 할당(자동)
// }

const user1 = {
  name: "채형원",
  role: Role.ADMIN, //관리자 0
};

const user2 = {
  name: "황지선",
  role: Role.USER, // 회원 1
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트 2
};



