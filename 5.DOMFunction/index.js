//document 객체를 확인할 수 있다.
console.log(document);

//html class 로 찾을경우
const title = document.getElementById("title");
console.log(title);
//html css 로 찾을경우
const title = document.querySelector("#title");
//DOM : DocumentObjectModel
//자바스크립트는 HTML의 모든 요소들을 가져와서 객체로 바꾼다.

console.error("Fuck");
title.innerHTML="Hi! From JS";
title.style.color = "red";
console.dir(title);
console.dir(document);
document.title("I own your now");
