//.js-toDoForm class의 속성값을 가져온다.
//input의 속성값을 가져온다.
//js-toDoList의 속성값을 가져온다.


const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

//TODOS_LS에 toDos라는 String 값을 넣는다.
const TODOS_LS = "toDos";

let toDos = [];
//localStorage에 key,value를 TODOS_LS,toDos 배열을 저장한다.
//하지만 자바스크립트는 로컬스토리지에 데이터를 저장할 수 없다. 
//[object object].... 로 계속 나온다. 
//String만 저장할 수 있다.
//JSON.stringify는 자바스크립트 오브젝트를 스트링 파일로 변환시켜준다.


function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function filterFn(toDo) {
    return toDo.id == 1;
}

//X버튼 누를때 삭제되게 한다.
//target : 어떤 버튼인지 선택해준다.
//father : target의 부모인 parentNode를 li로 지정한다.
//toDolist 즉 해당 클래스 파일에 명시된 속성값을 지운다.

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id != parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}



//로컬스토리지에 위에 선언한 toDos가 있는지 확인한다.
//없다면 아무런 로직도 실행하지 않는다. 
//현재 css상태가 display : block이기 때문이다.
//JSON : 데이터를 전달할때,자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 것이다.


function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        console.log(loadToDos);
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function toDo(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.addEventListener("click",deleteToDo);
    
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();

}
//이벤트 함수
//input에 값을 입력했을때 안지워지도록 한다.
//input의 value값을 가져온다.
//
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
//html 코드인 submit을 하고 handleSubmit함수를 실행한다.

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();

