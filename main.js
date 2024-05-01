let startbtn = document.getElementById("start_button")
let resetbtn = document.getElementById("reset_button")
let [seconds,minutes,hours] = [0,0,0]
let displaytime = document.getElementById("display")
let timer = null;

function start(){
    if(startbtn.innerHTML == "START"){
        startbtn.innerHTML = "PAUSE";
        startbtn.style.textDecoration = "underline red"
        resetbtn.style.display = "inline";
        watchstart();
    }
    else{
        startbtn.innerHTML = "START";
        startbtn.style.textDecoration = "underline green"
        watchstop();
    }
}

function reset(){
    if(resetbtn.style.display == "inline"){
        resetbtn.style.display = "none";
        startbtn.innerHTML = "START";
        startbtn.style.textDecoration = "underline green"
        watchreset();
    }
    else{
        resetbtn.style.display = "inline";
    }
}

function stopwatch(){
    seconds++;
    if(seconds == "60"){
        seconds = "0";
        minutes++;
        if(minutes == "60"){
            minutes = "0";
            hours++;
        }
    }
    let h = hours < 10? "0"+hours : hours;
    let m = minutes < 10? "0"+minutes : minutes;
    let s = seconds < 10? "0"+seconds : seconds;
    displaytime.innerHTML = h +":"+ m +":"+ s;
}

function watchstart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displaytime.innerHTML = "00:00:00";
}