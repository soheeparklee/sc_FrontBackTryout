



const clockElement= document.querySelector("#clock");
const timeElement= document.querySelector("#timer");

function clock(){
    const date= new Date();
    const hour= date.getHours();
    const minute= date.getMinutes().toString().padStart(2, "0");
    const seconds= String(date.getSeconds()).padStart(2, "0");

    clockElement.innerHTML= `${hour}시 ${minute}분 ${seconds}초`
}
clock();
setInterval(clock, 1000);

const start= new Date();
function timer(){
    const now = new Date();
    const passedTime= new Date(now-start);
    console.log(passedTime);
    const min= passedTime.getMinutes().toString().padStart(2,"0");
    const sec= passedTime.getSeconds().toString().padStart(2,"0");
    timeElement.innerHTML= `${min}:${sec}`
}
timer();
setInterval(timer, 1000);



