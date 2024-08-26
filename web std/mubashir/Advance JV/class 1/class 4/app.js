


// let arr = [2,3,4,5,6,6]


// let newArr = arr.map((data, index)=>{
// return data + 23

// })

// console.log(newArr)

// let arr = [2,3,4,5,6,8,7,9]



// let newArr = arr.filter((value)=>{
//  return value < 5 
// })
// console.log(newArr)


// let stdObj = [
//     {
//         name : "rafi",
//         age : 23
//     },
//     {
//         name : "saad",
//         age : 26
//     },
//     {
//         name : "sami",
//         age : 24
//     }
// ]


// let newObj = stdObj.filter((data)=>{
//     return data
// })
// console.log(newObj.name)


// let arr = [2,3,4,5]

// let red = arr.reduce((prev,curr)=>{
//     return prev * curr
// })

// console.log(red)



// let arr = [2,3,4,5]

// let fin = arr.find((value)=>{
//     return 4
// })
// console.log(fin)




// let stdObj = [
//   {
//         firstName : "rafi",
//         lastName : "ullah",
//         age : 23
//     },
//      {
//        firstName : "mubashir",
//         lastName : "khan",
//         age : 24
//     },
//     {
//         firstName : "saad",
//         lastName : "ahmed",
//         age : 20
//     }
// ]


// let newArr = stdObj.map((data)=>{
//     return "fullname" + " "+ data.firstName + " " + data.lastName + " " + data.age
// })

// console.log(newArr)


let stdObj = [
    {
          firstName : "rafi",
          lastName : "ullah",
          age : 23
      },
       {
         firstName : "mubashir",
          lastName : "khan",
          age : 24
      },
      {
          firstName : "saad",
          lastName : "ahmed",
          age : 20
      }
  ]
  
  
  let newArr = stdObj.map((data)=>{
      return "fullname" + " "+ data.firstName + " " + data.lastName + " " + data.age
  })
  
  console.log(newArr)



  let newFun = a => a 


  console.log(newFun(23))

