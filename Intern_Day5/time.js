const time= document.getElementById("time");
time.style.color= "salmon";
time.style.backgroundColor= "green";

const timer = () =>{
    const now= new Date();
    const hour= now.getHours();
    const min= now.getMinutes();
    const sec= now.getSeconds();
    const ahora= hour + ":" + min+ ":"+ sec;

    time.innerHTML= ahora;

}
setInterval(timer, 1000);