// alert("hello")



// flag concept 

let cities = ["multan", "karach", "lahore", "chitral"]

// console.log("cities", cities)

for(var i = 0 ; i < cities.length; i++){
    // console.log(cities[i])

var ismatch = false
if(cities[i] === "chitral"){
    alert("welcome to chitral")
ismatch = true
break
}

}
if(ismatch == false){
    alert("karachi is not exit")
}
