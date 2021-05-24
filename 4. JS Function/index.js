//camelcase 표기법
//스페이스 대신 대문자 쓰기 
//ex.daysOfWeek
const moday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const nicoInfo = {
    name : "Nico",
    gender : "Male",
    isHandsme:true,
    favMovies:["Along the god","LOTR","Oldboy"],
    favFood : 
    [
        {
            name : "kimchi",fetty:false
        },
        {
            name:"Cheese burger",fetty:true
        }
    ]
}
//console -> Object and built-in-function
//.log -> function

console.log(nicoInfo.favFood);
console.log(nicoInfo,console);
    
console.log("Hello");
console.log("Jun");
console.log("Liyn");
console.log("Dal");

//함수 만들기
//배열 선언후 함수 출력하기
function sayHello1(names){
    console.log(names,'Hello');
}
const names = ['Jun','Liyn','Dal','Son'];
let step;
for (step=0;step<names.length;step++){
    sayHello1(names[step]);
}

//console.log함수는 argument를 무한하게 가질 수 있다.
function sayHello2(name,age){
    console.log('Hello my name is',name,age,'years of age.');
}
sayHello2("Jun","22");

