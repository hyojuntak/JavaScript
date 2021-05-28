//html id 가 title인 css값을 가져올때는 querySelector를 쓴다.
//DOM객체에서 title의 css값을 꺼낸후 변수 title에 저장한다.
const title = document.querySelector("#title");


//윈도우 사이즈를 변경할때마다 log를 띄우는 함수
function handleResize(event){
    console.log(event);
    console.log("I have been resized");
}

//title을 클릭하면 색깔을 빨간색으로 바꾸게하는 함수
function handleClick(){
    title.style.color = "red";
}

//윈도우 사이즈가 변경될때마다 함수가 동작함
window.addEventListener("resize",handleResize);
title.addEventListener("click",handleClick);

