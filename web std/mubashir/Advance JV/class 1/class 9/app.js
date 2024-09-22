

// export const name = "rafiullah"

// console.log(name)




async function getData(){
    const data = await  fetch("https://jsonplaceholder.typicode.com/users")
    console.log(data)

}
getData()