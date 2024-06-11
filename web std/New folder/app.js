var hrs =0
var milli =0
var mnt =0
var sec =0

var hours = document.getElementById("hrs")
var secc = document.getElementById("sec")
var mntt = document.getElementById("mnt")
var milisec = document.getElementById("mill")




var timer = false

function start(){
    timer = true
    myFun()
}

function myFun(){
    if(timer == true){
        milli = milli + 1
milisec.innerHTML = milli

if(milli == 100){
    sec = sec + 1
    secc.innerHTML = sec
    milli = 0

if(sec == 5){
    mnt = mnt+ 1
    mntt.innerHTML = mnt
    sec = 0
}

}


        setTimeout(myFun, 10)
    }

}