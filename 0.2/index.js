let elList = document.querySelector(".card__wraper")
let elTemplate = document.querySelector(".templed").content
let elForm = document.querySelector(".form")
let elFormInput = document.querySelector(".form__input")


function renderArr(arr, List) {
    List.innerHTML = null
    arr.map(item => {

        let cloneTemplate = elTemplate.cloneNode(true)
        let cardimg = cloneTemplate.querySelector(".img")
        let cardtitle = cloneTemplate.querySelector(".title")
        let cardYear = cloneTemplate.querySelector(".year")



        cardimg.src = item.image
        cardtitle.textContent = item.title
        cardYear.textContent = item.price
        List.appendChild(cloneTemplate)
    })
}


// elForm.addEventListener("submit", e => {
//     e.preventDefault()
//     let inputValue = elFormInput.value.trim()

//     fetch(`https://fakestoreapi.com/products/s=${inputValue}`)
//     .then(res => res.json())
//     .then(data => renderArr(data, elList))


// })


// function fatchData() {

//     elList.innerHTML = "<img src='api.gif'/>"

//     fetch(`https://fakestoreapi.com/products/`)
//         .then(res => res.json())
//         .then(data => renderArr(data, elList))

// }

// fatchData()

fetch(`https://fakestoreapi.com/products/`)
    .then(res => res.json())
    .then(data => renderArr(data, elList))
    // .then(data => console.log(data))


