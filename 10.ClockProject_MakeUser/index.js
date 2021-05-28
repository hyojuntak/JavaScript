//querySelector는 첫번째 값만 가져온다. 
//querySelectall은 모든 값을 다 가져온다. 
//모든 걸 찾을때만 쓴다. 하나의 클래스를 가져오는데 Selectall을 쓰면 하나의 클래스를 가져와서 array에 넣기 때문에 복잡해진다.
//localStorage : 작은 정보를 유저 컴퓨터에 저장하는 방법
//자바스크립트 정보들을 저장한다.
//localstorage.setitem("key","value");


const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

//Date : 시간요소를 가지고 있는 객체 
//minutes,hours,seconds의 정보들을 Date객체의 get메소드를 통해 얻어온다.
//h1태그속성을 가져온 ClockTitle객체의 innerText메소드를 통해 시간을 화면에 출력해준다.

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds} `;


}



//.js-form클래스의 속성을 DOM객체의 querySelector함수를 통해 가져와서 불가변적인 변수 form에 넣어준다.
//input태그속성을 위에서 만든 부모인 form 태그의 클래스속성을 가지고 있는 변수 form의 querySelector함수를 통해 가져온다.
//.js-greetings클래스의 속성을 DOM객체의 querySelecotr함수를 통해 가져와서 변수 greetings에 넣어준다.

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//localStorage에 변경할 key값 currentUser를 불가변적 변수 USER_LS에 넣어준다.
//아래의 유저유효성검사에서 null일때 화면에 key값을 출력하지 않게 하기 위해 css파일에 선언해준 showing 클래스를
//불가변적 변수 SHOWING_CN에 넣어준다.

//currentUser라는 사용자를 생성후 USER_LS 변수에 넣는다.
//showing이라는 사용자를 생성후 SHOWING_CN 변수에 넣는다.

const USER_LS = "currentUser",
    SHOWING_CN = "showing";



//form class를 가져온 변수 form객체의 classlist함수를 통해 showing 이라는 키워드가 담긴 
//SHOWING_CN 즉 index.css파일에 선언되어 있는 .showing의 기능 display:block 기능을 삭제한다.
//그리고 greetings class에 block을 추가한다.
//greeting class 요소의 h4태크를 사용하여 Hello currentUser명을 출력한다.

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
//localStorage에 있는 key값이 currentUser라면 paintGreeting 함수로 이동후 로직을 수행한다.
//localStorage에 있는 ket값이 currentUser가 아니고 null이라면 아무로직도 실행하지 않는다.
//localStage에서 가져온 값을 currentUser에 넣는다.
//currentUser가 있으면 들고오고 없으면 null을 들고 온다. 
//그래서 null로 비교해주는 것이다.

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser==null) {
        alert("abc");
    }else{
        paintGreeting(currentUser);
    }
}

function init() {
    //시간 초기값을 얻는다.
    getTime();
    //setInterval(실행할 함수, 시간 간격);
    setInterval(getTime,1000);
    loadName();
}
init();