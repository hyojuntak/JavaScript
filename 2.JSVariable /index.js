//변수 
//순서 : 생성,초기화,사용
//let : 블록 유효 범위를 갖는 지역 변수를 선언하며, 선언과 동시에 임의의 값으로 초기화할 수도 있다.
//const : 블록 범위의 상수를 선언하며, 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없다.

let a = 221;
let b = a-5;
a = 4;
console.log(b,a); 

const a = 221;
const b = a-5;
// a = 4; //이미 정의되어 있음 에러발생
console.log(b,a);

var a = 221;
var b = a -5;
a = 4;
console.log(b,a);

/*************************/

//첫 변수 선언은 const로 !
//1.String
const what1 = "Nicolas";
const what2 = "♥";
const what3 = "5959";
console.log(what1);
console.log(what2);
console.log(what3);

//2.Boolean
const wat = true;
console.log(wat);

//3.Number
const wat = 655;
console.log(wat);

//4.Float
const wat = 55.1;
console.log(wat);




