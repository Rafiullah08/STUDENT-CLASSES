var hrs = 0;
var mnt = 0;
var sec = 0;
var mili = 0;

var milsec = document.getElementById("Milli");
var seconds = document.getElementById("seconds");
var minuts = document.getElementById("Minuts");
var hours = document.getElementById("Hours");

var timer = false;

function start() {
  timer = true;
  myFun();
}

function myFun() {
  if (timer == true) {
    mili = mili + 1;
    milsec.innerHTML = mili;

    if (mili == 100) {
      sec = sec + 1;
      seconds.innerHTML = sec;
      mili = 0;

      if (sec == 60) {
        mnt = mnt + 1;
        minuts.innerHTML = mnt;
        sec = 0;

        if (mnt == 5) {
          hrs = hrs + 1;
          hours.innerHTML = hrs;
          mnt = 0;
        }
      }
    }

    var getsec = sec;
    var getmnt = mnt;
    var gethr = hrs;
    var getmilli = mili;

    if (getsec < 10) {
      getsec = "0" + sec;
    }
    if (getmnt < 10) {
      getmnt = "0" + mnt;
    }
    if (gethr < 10) {
      gethr = "0" + hrs;
    }
    if (mili < 10) {
      getmilli = "0" + mili;
    }

    seconds.innerHTML = getsec;
    minuts.innerHTML = getmnt;
    hours.innerHTML = gethr;
    milsec.innerHTML = getmilli;

    setTimeout(myFun, 10);
  }
}

// create reset funtion
function reset() {
  location.reload();
}




// create stop function
function stop() {
  // clearInterval(interval)

  timer = false;
  myFun();
}
