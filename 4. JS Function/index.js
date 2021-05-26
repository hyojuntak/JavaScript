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

<<<<<<< HEAD

=======
>>>>>>> f2ad6f760858d827fc1c8b91d5437324d9ffc8ee
/************************************************************ */

//$사용
function sayHello3(name,age){
   return `Hello my name is ${name}. ${age} years of age.`;
}
sayHello3("Jun","22");

const greetNicolas = sayHello3("Nicolas","21");
console.log(greetNicolas);

//객체 안에 함수 만들기 
//객체 안에 여러 개의 함수 못만드나요??
//노가다로 풀긴했음..
// const calculator1 = {
//     plus : function(a,b){
//         return a + b;
//     }
// }
// const calculator2 = {
    
//     minus : function(a,b){
//         return a - b;
//     }
// }
// const calculator3 = {
    
//     multiply : function(a,b){
//         return a * b;
//     }
// }
// const calculator4 = {
    
//     mode : function(a,b){
//         return a / b;
//     }
// }
// const calculator5 = {
    
//     sqrt : function(a,b){
//         return Math.sqrt(a,b);
//     }
// }
    
// const plus = calculator1.plus(5,5);
// const minus = calculator2.minus(5,5);
// const multiply = calculator3.multiply(5,5);
// const mode = calculator4.mode(5,5);
// const sqrt = calculator5.sqrt(5,5);

// console.log(plus);
// console.log(minus);
// console.log(multiply);
// console.log(mode);
// console.log(sqrt);





//다시 시도! 객체 안에 여러 함수 만들기!
//알고보니 함수사이에 ,를 안찍어줬다는..

const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
    return a * b;
    },
    mode : function(a,b){
    return a / b;
    },
    sqrt : function(a,b){
    return Math.sqrt(a,b);
    }

}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const multiply = calculator.multiply(5,5);
const mode = calculator.mode(5,5);
const sqrt = calculator.sqrt(5,5);

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(mode);
console.log(sqrt);

<<<<<<< HEAD





=======
>>>>>>> f2ad6f760858d827fc1c8b91d5437324d9ffc8ee
