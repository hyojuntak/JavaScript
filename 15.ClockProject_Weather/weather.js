const COORDS = "coords";
//coords의 위도 경도값을 string파일로 바꾸어 localStorage에 저장한다.
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//좌표를 가져왔을경우 성공유무 띄우기
//위도,경도를 각각 가져온다.
//그리고 coordsObj라는 배열에 저장한다.
//그리고 저장한다.

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}
//해당좌표를 못가져왔을때 에러처리
function hadnleGeoError() {
    console.log("Can't access geo location");
}

//날씨묻기 
//navigator라는 내장객체를 사용,geolocation (좌표) 함수안의 getCurrentPosion이라는 메소드 사용 (두개의 인자를 갖는다.)
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,hadnleGeoError);
}
//localStorage에 coords 라는 값이 존재하면 
//로직 처리 X
//없다면 askForCoords로 이동후 GPS 값 얻어오기

function loadCoords() {
    const loaderCords = localStorage.getItem(COORDS);
    if (loaderCords==null) {
        askForCoords();
    }else{

    }
}


function init(params) {
    loadCoords();
}
init();

