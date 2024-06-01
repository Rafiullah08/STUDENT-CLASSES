




function addTodo(){

    var userTodo = document.getElementById("userTodo").value;
    var parent = document.getElementById("parent")


// create div1
var div1 = document.createElement("div")
div1.setAttribute("class", "card")


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

para.append(paraText)


div2.append(para)

parent.append(div1)



}


