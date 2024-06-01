

var doc = document.getElementsByTagName("div")
var head1 = doc[0].firstChild.nextSibling
console.log(head1)

head1.style.color = "white"
head1.style.fontSize = "45px"
head1.style.backgroundColor = "red"

var head2 = doc[0].lastChild
var headd = head2.previousSibling
headd.style.color = "white"
headd.style.fontSize = "45px"
headd.style.backgroundColor = "red"
headd.style.border = "3px solid black"
headd.style.borderRadius = "14px"


