const image = [
    {img: "./images/user2.jpg"},{img: "./images/customer-1.jpg"},{img: "./images/library.png"},{img: "./images/basketball.png"},{img: "./images/cafeteria.png"},{img: "./images/newyork.png"}
]

const img = document.querySelector("#img")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const randomBtn = document.querySelector(".random")

let current = 0

window.addEventListener("DOMContentLoaded", function(){
    showPics()
})

function showPics(){
    let select = image[current]
    img.src = select.img
}

nextBtn.addEventListener("click", function(){
    current++
    if(current > image.length -1){
        current = 0
    }
    showPics()
})

prevBtn.addEventListener("click", function(){
    current--
    if(current < 0){
        current = image.length -1
    }
    showPics()
})



