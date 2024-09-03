// api

// application programming interface

// 2 programming language ko apas me communicate karata hai

// post , get ,delete, update


// json => javascript object notation

fetch("https://jsonplaceholder.typicode.com/todos")
.then((data)=>data.json())  //ye data ko json format me convert krta hai
.then((res)=>console.log(res))
.catch((error)=>console.log(error))

