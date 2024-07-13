

var stdObj = {
    name : "mubashir",
    age : 23,
    id : 101,
    gender : "male",
    greeting : function(){
        console.log(this.name + " " + "welcome")
    }
    
}


console.log(stdObj.greeting())

// for(a in stdObj){
//     console.log(a, stdObj[a])
// }




function add(){
    console.log(this)
}
add()