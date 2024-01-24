// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabse, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databseURL: "https://playground-4dd6f-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const addButton = document.querySelector("#addButton")
const inputField = document.getElementById("input")
const ul = document.createElement("ul")
const li = document.querySelectorAll("li")
document.getElementById("container").append(ul)
ul.setAttribute("style", "display:flex; flex-wrap:wrap; max-width:180px; gap:5px; padding:0; list-style-type:none")

// const app = initializeApp(appSettings)
// const database = getDatabse(app)
// const booksInDB = ref(database, "Books")

// onValue(booksInDB, function (snapshot) {
//     if(snapshot.exists()){
//         clearUI()
//         let booksArray = Object.entries(snapshot.val())
//         for (let i = 0; i < booksArray.length; i++) {
//             let currentItem = booksArray[i]
//             render(currentItem)
//         }
//     }
//     else{
//         ul.textContent = "No items here"
//     }
// })

function clearUI() {
    ul.innerHTML = ""
}

function clearInputEl() {
    inputField.value = ""
}

function render(currentItem) {
    const book = document.createElement("li")
    // let bookID = currentItem[0]
    // let bookValue = currentItem[1]
    ul.append(book)
    book.textContent = currentItem

    // li.addEventListener("dblclick", function () {
    //     const clickedItemInDB = ref(database, `booksInDB/${bookID}`)
    //     remove(clickedItemInDB)
    // }) 
}


addButton.addEventListener("click", function () {
    let input_val = inputField.value
    // push(booksInDB, input_val)
    console.log(input_val + " added to DB")
    render(input_val)
    let allLIEl = document.querySelectorAll("li")
    for (let i = 0; i < allLIEl.length; i++) {
        allLIEl[i].setAttribute("style", "padding: 10px; background-color: #FFFDF8; border-radius: 5px; flex-grow: 1; box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2); text-align: center;")
        allLIEl[i].onmouseover = function () {
            this.style.backgroundColor = "red" 
            this.style.cursor = "pointer"
        }

        allLIEl[i].onmouseout = function () {
            this.style.backgroundColor = "#FFFDF8"
        }
    }
    clearInputEl()
})




