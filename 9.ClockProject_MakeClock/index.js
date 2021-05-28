//query selector는 element의 자식을 탐한다.
//clock class의 자식을 탐하고 싶어한다.
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = 
    `${hours < 10 ? `0${hours} `: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds} `;


}

function init() {
    //시간 초기값을 얻는다.
    getTime();
    //setInterval(실행할 함수, 시간 간격);
    setInterval(getTime,1000);
}
init();