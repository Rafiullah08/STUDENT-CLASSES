// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-u2MT2baYEiKhWIZ_uZA4wcnJcKEP7Kc",
  authDomain: "todoapp-524d0.firebaseapp.com",
  projectId: "todoapp-524d0",
  storageBucket: "todoapp-524d0.firebasestorage.app",
  messagingSenderId: "322108793217",
  appId: "1:322108793217:web:a35e1cc0f771ed58b80880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app,"app")


// Initialize Cloud Firestore and get a reference to the service




async function addstd() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const password = document.getElementById("password").value
    const number = document.getElementById("number").value
    const id = document.getElementById("id").value

 
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "stdData"), {
        firstName: firstName,
        lastName: lastName,
        password: password,
        number : number,
        id: id
        
      },
// console.log(docRef.id,"adddata")
    );
}



async function getData(){
    const db = getFirestore(app);
console.log("loding...")
    const stdData = await getDocs(collection(db, "stdData"));
    
    
stdData.forEach((value)=>{
const response = value.data()
})

}






const btn = document.getElementById("btn")
btn.addEventListener("click", addstd)

const getbtn = document.getElementById("getbtn")
getbtn.addEventListener("click", getData)