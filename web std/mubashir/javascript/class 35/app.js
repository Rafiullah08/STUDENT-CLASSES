var divv = document.getElementsByTagName("div")
console.log(divv[0].firstElementChild)

var parent  = document.createElement("div")
console.log(parent)

var head = document.createElement("h1")
console.log(head)

var text = document.createTextNode("MY name is rafiullah")
console.log(text)

var newhead = head.appendChild(text)
console.log(newhead)

parent.appendChild(head)


var  parent = document.getElementById("parent")


var divv = document.createElement("div")
 
var head = document.createElement("h1")

var text = document.createTextNode("this is h1 element")

var h11 =   head.appendChild(text)

 var child = divv.appendChild(head)

console.log(divv)

parent.appendChild(divv)
