
var obj = {
    name : "rafiullah",
    age : 22,
    id : 1001,
    chek : false,
    num : undefined,
    address : null
}

obj.gender = "male"
obj.name = "mubashir"
delete(obj.name)
obj.email = "rafi@gmail.com"

var check = "name" in obj
console.log(check)

console.log(obj)