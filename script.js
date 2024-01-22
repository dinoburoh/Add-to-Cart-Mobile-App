import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabse, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databseURL: "https://playground-4dd6f-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabse(app)
const moviesInDB = ref(database, "Movies")
console.log(app)

const addButton = document.querySelector("#addButton")
const inputField = document.getElementById("input")

addButton.addEventListener("click", function () {
    let input_val = inputField.value
    push(moviesInDB, input_val)
    console.log(input_val + " added to DB")
})