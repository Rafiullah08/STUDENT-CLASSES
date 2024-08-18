

// const [name,age,id ] = ["rafiullah", "23", "1001"]

// console.log(name)


// const {name, age, id} = {
//     name : "rafiullah",
//     age : 23,
//     id : 1001

// }
// console.log(name, age ,id)

let arr1 = [1,2,3,4,5]

let arr2 = ["one","two","three"]
let arr4 = ["four","five","three"]


let arr3 = [...arr1, ...arr2, ...arr4]
console.log(arr3)