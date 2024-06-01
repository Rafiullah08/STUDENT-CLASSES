

var inputfield = document.getElementById("inputfield")

console.log(inputfield.setAttribute("class", "input"))



var dev = document.createElement("div")
var para = document.createElement("p")
var text = document.createTextNode("my name is rafiullah")

 para.append(text)
 dev.append(para)
console.log(dev)