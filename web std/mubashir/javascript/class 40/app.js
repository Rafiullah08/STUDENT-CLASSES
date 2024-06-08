// settimeout
// setinterval


// setTimeout(function add(){

// console.log("hello world")



// }, 5000)



// setInterval(function(){
//     console.log("hello")
// }, 1000)



var interval = setInterval(function (){
    console.log(2+2 )
} ,1000)



function stop(){
    clearInterval(interval)
}

