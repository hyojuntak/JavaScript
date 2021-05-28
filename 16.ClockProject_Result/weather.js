const weather = document.querySelector(".js-weather");


const API_KEY = "17249698afba21ded21a749d1cf12d94";
const COORDS = "coords";

//weather API 가져오기
//then : 데이터가 완전히 들어온다음에 함수를 호출한다.
//fetch가 된 후 함수를 호출하겠다. 서버로부터 데이터가 들어올때까지 기다려야한다.

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json) {
        const temperauture = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperauture} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
    //좌표를 가져왔을경우 성공유무 띄우기
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
//해당좌표를 못가져왔을때 에러처리
function hadnleGeoError() {
    console.log("Can't access geo location");
}

//날씨묻기 
//navigator라는 내장객체를 사용,geolocation 함수안의 
//getCurrentPosion이라는 메소드 사용
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,hadnleGeoError);
}

function loadCoords() {
    const loaderCords = localStorage.getItem(COORDS);
    if (loaderCords==null) {
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loaderCords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}




function init() {
    loadCoords();
}
init();

