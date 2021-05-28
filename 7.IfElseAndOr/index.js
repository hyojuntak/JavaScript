const title = document.querySelector("#title");

//예제1) click이벤트가 일어나면 빨간색,파란색,빨간색,파란색..순으로 바뀌게 해보시오.

//가변적인 변수 cnt 선언후 초기화
let cnt = 0;

//윈도우 사이즈를 변경할때마다 log를 띄우는 함수
function handleResize(event){
    console.log(event);
    console.log("I have been resized");
}

//title을 클릭하면 색깔을 빨간색으로 바꾸게하는 함수
//커서를 title에 올릴때마다 색깔이 바뀌게 하기 (빨간색 / 파란색)
//홀수 : 빨, 짝수 : 파 -> 두가지 색밖에 없기 때문에
//짝수,홀수 알려주는 로직 작성

function handleClick(){
    cnt++;
    if(cnt%2!=0){
        title.style.color = "red";
    }else{
        title.style.color = "blue";
    }
}

//출력 메소드
title.addEventListener("click",handleClick);



//예제2)기본 색이 있다. click 이벤트가 발생하면 다른 한가지 색으로 바꾸게 하시오.
//불가변적인 기본색 BASE_COLOR 선언후 아래색으로 초기화
//불가변적인 다른색 OTHER_COLOR 선언후 아래색으로 초기화
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

//click 이벤트가 발생할때마다 비교해줄 수 있는 currentColor 변수 현재 색으로 지정
//click 이벤트가 발생할때마다 현재색=이벤트 발생색 비교후 같다면 다른색으로 바꿔준다.

function handleClick() {

    const currentColor = title.style.color;
    if (currentColor==BASE_COLOR) {
        title.style.color=OTHER_COLOR;
    } else{
        title.style.color=BASE_COLOR;
    }  
}
//id 가 title인 css 객체의 색을 기본색으로 초기화시켜준다. 
//click 이벤트가 발생하며 ㄴhandleClick 함수를 호출한다.
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}
init();