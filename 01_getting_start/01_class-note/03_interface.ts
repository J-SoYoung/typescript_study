interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 20,
  name: "세호",
};

// 함수에 인터페이스 활용
// 함수의 파라미터에 인터페이스를 정의하고,
// 함수를 호출할 때 인수가 파라미터에 정의한 규칙을 잘 따르는지 확인하는 것이
// 타입스크립트의 역할이다.
function getUser(user: User) {
  console.log(user);
}
const catp = {
  name: "소영",
  age: 20,
};
getUser(catp);

//함수의 스펙(구조)에 인터페이스를 활용
// void형식은 number에 할당할 수 없다.
// SumFunction의 규칙을 미리 정의했고, sum2는 SumFunction의 규칙을 따르고 있으므로
// sum2의 매개변수와 함수의 내용이 SumFunction과 같아야 한다.
interface SumFunction {
  (a: number, b: number): number;
}

var sum2: SumFunction;
sum2 = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱 방식을 정의하는 인터페이스
// 인터페이스를 미리 정의해놓고 사용하는 것이 아니라
// 속성을 사용할 때마다 타입을 정의할 수 있다
interface StringArray {
  [index: number]: string;
}

// 배열 index의 타입은 number고, 해당 결과값은 string이다
// 배열에 접근하여 작업을 할 때도 타입을 확인할 수 있다
var arr2: StringArray = ["a", "b", "c"];
// arr2[0] = 10 // Error : number는 string에 할당할 수 없다.

// 딕셔너리 패턴
// 객체 인덱스를 적용해 값을 할당할 때 타입을 확인한다
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
  sth: /abc/,
  // cssFile: "css",  //Error 왼쪽은 string key 값, 오른쪽은 RegExp정규식이 와야 한다
  cssFile: /\.css$/, // css확장자의 모든 파일
  jsFile: /\.js$/, // css확장자의 모든 파일
};

// 인터페이스 확장
// 인터페이스를 상속받아 기존에 있었던 것보다 확장해 사용할 수 있다
interface Person {
  name: string;
  age: number;
}

// 기존에 있는 인터페이스와 내용이 겹친다면
// 해당 내용을 extends 키워드를 사용해 상속받아 사용할 수 있다.
// interface developer {
//   name: string;
//   age: number;
//   language: string;
// }
interface developer extends Person {
  language: string;
}

var students: developer = {
  name: "thdud",
  age: 30,
  language: "js",
};
