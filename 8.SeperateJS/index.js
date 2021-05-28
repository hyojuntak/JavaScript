const title = document.querySelector("#title");

//css파일에 설정한 내용들이 반드시 html파일에 있을 필요는 없다. 
//자바스크립트에서 사용해도 된다.
//css에서 구현한 .clicked라는 클래스의 속성을 가져와서 CLICKED_CLASS라는 변수에 저장한다.

const CLICKED_CLASS = "clicked";

function handleClick() {
   //contaion : 포함하고 있는지 유무를 알려준다. 
   //방법1)classlist 내장객체의 cotains 함수를 사용하여 현재 classList안에 "clicked"가 있는지 확인한다. 
   //만약 hasClass가 True라면 clicked가 있다는 뜻이므로 clicked를 지워준다. -> id = btn
   //만약 hasClass가 False라면 clicked가 없다는 뜻이므로 clicked를 추가해준다. -> id = btn clicked 
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
        
    }
    //toggle : 클래스가 있으면 add 없으면 remove 해준다.
    //위의 코드들의 실행결과와 동일하게 출력된다.
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click",handleClick);
}

init();