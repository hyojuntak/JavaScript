const body = document.querySelector("body");

//횟수반복을 위해 3회로 지정해준다.
const IMG_NUMBER = 3;

//임의의 숫자를 얻어와서 -> imgNumber
//img 객체를 생성후 
//객체변수의 src (주소) 를 지정해준다.
//table Listener를 이미지화 하기 위해 event Listener를 연결한다.
//API에서 나온 게 아니기때문에 필요는 없다. 
//로컬에 저장되어있는 이미지이기 때문이다.

// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    const img = new Image;
    img.src = `/images/${imgNumber+1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
    // img.addEventListener("loadend",handleImgLoad);
   
}





//0,1,2 랜덤으로 숫자를 출력한다.
function getRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);   
    return number;
}

//1. 랜담함수 0~2까지 중 1개 출력
//2. 랜덤으로 뽑힌 숫자를 가지고 /image 밑에 있는 3가지 .jpg중에 하나선택해서 보여준다.

function init() {
    const randomNumber = getRandom(); 
    paintImage(randomNumber);
}

init();