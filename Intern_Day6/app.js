const clock= document.querySelector(".clock");

const clockFunction = () =>{
    const weekday = ["일","월","화","수","목","금","토"];

    const time= new Date();
    const year= time.getFullYear();
    const month= time.getMonth()+1;
    const date=time.getDate();
    const day= weekday[time.getDay()];
    const hour= time.getHours();
    const minute= time.getMinutes();
    const second= time.getSeconds();
    const ahora=`${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${minute}분 ${second}초`
    clock.innerHTML= ahora;
}
setInterval(clockFunction, 1000)

