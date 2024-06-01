function getvalue(A){
var input = document.getElementById("input")
// console.log(A)

input.value += A

}


function ans(){
var input = document.getElementById("input")
console.log(input.value)

var anss = eval(input.value)

input.value = anss

}



function delte(){
    var input = document.getElementById("input")
    // console.log(input.value)
    input.value = ""
}


function clearNum(){
    var input = document.getElementById("input")
var clear = input.value.slice(0,-1)
input.value = clear
}




