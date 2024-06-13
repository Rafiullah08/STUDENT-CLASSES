// console.log(currenTime)





setInterval(function(){
var currenTime = new Date()

    var gethrs = document.getElementById("hrs")
    var getmnt = document.getElementById("mnt")
    var getsec = document.getElementById("sec")
    
    gethrs.innerHTML = currenTime.getHours()
    getmnt.innerHTML = currenTime.getMinutes()
    getsec.innerHTML = currenTime.getSeconds()

    
},1000)

