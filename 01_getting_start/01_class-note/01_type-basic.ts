// js 문자열 선언
var str = "thdud";

// ts문자열 선언
const strs: string = "thdud";

// ts숫자
let num: number = 10;

// ts배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "hulk"];
let items: number[] = [1, 2, 3];
let items2: string[] = ["Capt", "Thor", "hulk"];

// ts 튜플 = Tuple ( 배열 안에서의 index의 type을 정한 것 )
let address: [string, number] = ["gangnam", 10];

// ts객체
let obj: object = {};

// object의 조건 안에 들어오면 큰 문제없이 타입 검사가 끝난다.
// ( 객체 안에 어떤 속성이 들어오든 크게 신경쓰지 않는다 )
let person: object = {
  name: "thdud",
  age: 20,
};

// object안 속성까지 지정해 줄 수 있다.
let person2: { name: string; age: number } = {
  name: "thdud",
  age: 20,
};

// ts 진위값
let show: boolean = true;
