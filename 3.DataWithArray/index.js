//camelcase 표기법
//스페이스 대신 대문자 쓰기 
//ex.daysOfWeek
const moday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(moday,tue,wed,thu,fri);

const daysOfWeek = ["Mon","Thu","Wed","Thu","Fri","Sat","Sun",true];

var step;
for(step=0;step<daysOfWeek.length;step++){
    console.log(daysOfWeek[step]);
}

//Object
//키 값을 통해 value 값을 꺼낸다.

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

console.log(nicoInfo.gender);
    
    nicoInfo.gender = "Female";

console.log(nicoInfo.gender);

console.log(nicoInfo);

let name = "john";
//역 따움표 ${name} -> 값을 표시할때 사용
console.log(`Hello, ${name}!`);

let isGreater = 4>1;
console.log(isGreater);