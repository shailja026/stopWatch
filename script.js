let myTime = document.getElementById("timeStamp");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let msec = 00;
let secs = 00;
let min = 00;


let timerId = null;
  
startBtn.addEventListener("click" , function(){
     if(timerId !== null){
        clearInterval(timerId);
     }
    
    timerId = setInterval(slowTime , 10);
  
})
stopBtn.addEventListener("click", function(){
    clearInterval(timerId);
});
resetBtn.addEventListener("click" , function(){
    clearInterval(timerId);
    myTime.innerHTML = "00 : 00 : 00";
    msec = secs = min = 0;
})



function slowTime(){
    msec++;
    if(msec == 100){
        msec = 0
        secs++;
        if(secs == 60){
            secs = 0;
            min++;
        }
    }
    let mSec;
    if(msec<10){
        mSec = `0${msec}`
    }else{
        mSec = msec
    }

    let Sec;
    if(secs<10){
        Sec = `0${secs}`
    }else{
        Sec = secs
    }

    let Min;
    if(min<10){
        Min = `0${min}`
    }else{
        Min = min
    }

    myTime.innerHTML = `${Min} : ${Sec} : ${mSec}` 
}