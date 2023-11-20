function setIntervalFunction(){
    console.log("I repeat using setInterval");
}
setInterval(setIntervalFunction, 1000);


function setTimeoutFunction(){
    console.log("I repeat using setTimeout")
    setTimeout(setTimeoutFunction, 1000);
}
setTimeoutFunction()

