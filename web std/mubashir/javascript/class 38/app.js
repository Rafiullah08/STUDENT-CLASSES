




function addTodo(){

    var userTodo = document.getElementById("userTodo").value;
    console.log(userTodo)
    var parent = document.getElementById("parent")


// create div1
var div1 = document.createElement("div")
div1.setAttribute("class", "card mt-3")


// create div2
var div2 = document.createElement("div")
div2.setAttribute("class", "card-body")

div1.append(div2)


// create h4

var head1 = document.createElement("h4")
head1.setAttribute("class", "card-title")
var headText = document.createTextNode("Todo")

// append text in h4
head1.append(headText)


// append head1 into div2
div2.append(head1)


// create paragraph 
var para = document.createElement("p")
para.setAttribute("class", "card-text")

var paraText = document.createTextNode(`${userTodo}`)
userTodo =" "

para.append(paraText)


div2.append(para)

parent.append(div1)


// create edit and delete button

var btn1 = document.createElement("button")
btn1.setAttribute("class", "btn btn-primary  ")
var btn1Text = document.createTextNode("Edit")
btn1.append(btn1Text)



var btn2 = document.createElement("button")
btn2.setAttribute("class", "btn btn-primary ms-3 ")
var btn2Text = document.createTextNode("Delete")
btn2.append(btn2Text)

div2.append(btn1)
div2.append(btn2)





}


function deleteAll(){
    var parent = document.getElementById("parent")
    console.log(parent)
    parent.remove()
}


