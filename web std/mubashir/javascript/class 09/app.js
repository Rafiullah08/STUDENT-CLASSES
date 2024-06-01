// alert("hellow")



let num1  = prompt("type num1")
let num2  = prompt("type num2")
let opt = prompt("enter opt,Ex +,-,*,/")


if(opt === "+"){
    console.log(num1 + num2,"answer");
} else if(opt == "-"){
    console.log(num1 - num2,"subtract");
}else if(opt == "*"){
    console.log(num1 * num2, " multiply");
}else if(opt == "/"){
console.log(num1 / num2, "devide");
}else {
    alert("sorry we not found a number")
}