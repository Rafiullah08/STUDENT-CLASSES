




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



// create h4

var head1 = document.createElement("h4")
head1.className= "card-title"
head1.innerHTML = "My Todo"



// append head1 into div2
div2.append(head1)


// create paragraph 
var para = document.createElement("p")

para.className= "card-title"
para.innerHTML = `${userTodo}`

userTodo.value = ""



// append para into div2
div2.append(para)

div1.append(div2)

parent.append(div1)


// create edit and delete button

var btn1 = document.createElement("button")
btn1.innerHTML = "Edit"
btn1.className = "btn btn-primary ms-3"
btn1.setAttribute("onclick", "edit(this)")



var btn2 = document.createElement("button")
btn2.innerHTML = "Delete"
btn2.className = "btn btn-danger ms-3"
btn2.setAttribute("onclick", "delt(this)")



div2.append(btn1)
div2.append(btn2)





}

 
function deleteAll(){
    var parent = document.getElementById("parent")
    console.log(parent)
    parent.remove()
}


function delt(ele){

ele.parentNode.parentNode.remove()
}


function edit(e){
var edit = prompt("enter your edit value ", e.parentNode.firstElementChild.nextSibling.innerHTML)

e.parentNode.firstElementChild.nextSibling.innerHTML = edit



}
