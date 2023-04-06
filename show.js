// // var person = [
// //     {name: "Tunde",
// //      age: 20,
// //     school:"OAU"},
// //     {name: "Shola",
// //      age: 25,
// //     school:"LASU"},
// //     {name: "Kunle",
// //      age: 22,
// //     school:"UNILAG"},
// // ]


// // var some = document.querySelector(".name")

// // var age = document.querySelector(".age")

// // var school = document.querySelector(".school")

// // var btn = document.querySelector("button")

// // var allSection = document.querySelector(".all-section")

// // var currentItem = 0

// // function displayInfo(){
// //     var item = person[currentItem]
// //     some.innerHTML = item.name
// //     age.innerHTML = item.age
// //     school.innerHTML = item.school
// // }

// // btn.onclick = function(){
// //     currentItem = Math.floor(Math.random() * person.length)
// //     displayInfo()
// // }

// // window.addEventListener("DOMContentLoaded", function (){
// //     displayInfo()
// // })

// // window.addEventListener("DOMContentLoaded", function (){
// //     var displayName = person.map(function(item){
// //         return `<h2 class="name">${item.name}</h2>
// //     <h2 class="age">${item.age}</h2>
// //     <h2 class="school">${item.school}</h2>`
// //     })

// //     displayName = displayName.join("")

// //     allSection.innerHTML = displayName

// //     console.log(displayName)
// // })


// // var firstName;

// // var firstName = "taiwo"

// // firstName = "titi"

// // console.log(firstName)

// // let name = "Ade"



// // console.log(`Come home ${name}`)



// // let ourName = ["Abeeb", "Ibraheem", "Toyyib"]

// // let thirdName = ["Biodun", "Biona", "Olayinka"]

// // let surname = "Bakare"

// // let ourFullName = []


// // function showName(){
// // for(i = 0; i < ourName.length; i++){
// //     ourFullName.push(`${ourName[i]}  ${thirdName[i]} ${surname}`)
// // }
// // }
// // showName()
// // console.log(ourFullName)
// // var btn = document.querySelector("button")
// // var h3 = document.querySelector("h3")

// // var body = document.querySelector("body")





// // btn.onclick = function(){
// //     var li = document.createElement("li")
// //     h3.appendChild(li)
     
// //     li.innerHTML = showName()
// //     body.appendChild(h3)
// // }

// // const myName = "john"

// // function morning(name){
// //     return `Good morning ${name}`
// // }

// // function afternoon(name){
// //     return `Good afternoon ${name}`
// // }
// // function evening(name){
// //     return `Good evening ${name}`
// // }

// // function greet(name, fc){
// //     console.log(`${fc(name)} my name is ${myName} and I am pleased to meet you`)
// // }

// // greet("Ibraheem", morning)
// // greet("Shade", afternoon)
// // greet("Toby", evening)





// // const profile = [
// //     {name:"Ibraheem", school: "OAU", course: "Pharmacy"},
// //     {name:"Abeeb", school: "Unilag", course: "Botany"},
// //     {name:"Toyyib", school: "Unilorin", course: "Agric"},
// // ]



// let btn = document.querySelector("button")

// let h2 = document.querySelector("h2")
// let count = document.getElementById("count")

// let saveBtn = document.getElementById("save")


// let num = 0





// btn.addEventListener("click", function(e){
//     num++
//     h2.innerHTML = "Counter: " + "" + num
// })


// saveBtn.addEventListener("click", function(){
//     count.innerHTML +=  `${num}, `

//     zero(num = 0)
// })



// function zero(){
//     h2.innerHTML = "Counter: " + "" + num
// }


// let games;

// if(localStorage.getItem("games")){
// games = JSON.parse(localStorage.getItem("games"))

// } else{
//     games = []
// }


// console.log(games)
// // names.push("dare")
// games.push("dare")

// localStorage.setItem("games", JSON.stringify(games))



// // let fruits;

// // if(localStorage.getItem("fruits")){
// // fruits = JSON.parse(localStorage.getItem("fruits"))

// // } else{
// //     fruits = []
// // }


// // console.log(fruits)
// // // fruits.push("apple")
// // fruits.push("apple")

// // localStorage.setItem("fruits", JSON.stringify(fruits))

// localStorage.clear()



// Random Color Code 


// const color = ["Red", "Green", "Blue", "rgba(100, 200, 300, 0.5)", "yellow", "magenta"]

// let btn = document.querySelector("button")
// let show = document.querySelector(".color")

// btn.addEventListener("click", function(){
//     let body = document.querySelector("body") 

//     let quick = color[generateRandomNumber()]
//     show.innerHTML = `Color names: ${quick}`
//     body.style.background = quick

// })

// function generateRandomNumber(){
//     return Math.floor(Math.random() * color.length)
// }


// let them = [
//     {name: "Ade", school: "OAU",job: "Pharmacy"},
//     {name: "Ola", school: "Unilag", job: "Engineer"},
//     {name: "Tunde", school: "UI", job:"Agric"},
// ]

// window.addEventListener("DOMContentLoaded", function(){
//     let newThem = them.map(function(item){
//        return `<li>${item.name} ${item.school}  ${item.job}</li>`
//     })
//     console.log(newThem)
//     let h1 = document.createElement("h2")
//     let body = document.querySelector("body")
//     body.prepend(h1)
//     h1.innerHTML = newThem.join("")
// })

// function massiveNameDisplay(){
    
// }



// localStorage.setItem("them", JSON.stringify(them))

// let us = localStorage.getItem("them")
// console.log(JSON.parse(us)[0])


// Hex Color Code


// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// let btn = document.querySelector("button")
// let color = document.querySelector(".color")

// let body = document.querySelector("body")

// btn.addEventListener("click", function(){
//     let hexColor = "#"
//     for(i = 0;i < 6; i++){
//         hexColor += hex[generateRandomNumber()]
//     }
//     color.innerHTML = `Hex Color codes: ${hexColor}`
//     body.style.backgroundColor = hexColor
// })



// function generateRandomNumber(){
//     return Math.floor(Math.random() * hex.length)
// }



// let counting = document.querySelector(".count")

// let btns = document.querySelectorAll(".btn")

// let count = 0;


// btns.forEach(function(items){
//     items.addEventListener("click", function(e){
//         let run = e.currentTarget
//         if(run.classList.contains("decrease")){
//             count--;
//         } else if(run.classList.contains("increase")){
//             count++;
//         } else{
//             count = 0
//         } if(count > 0){
//             counting.style.color = "green"
//         } if(count < 0){
//             counting.style.color = "red"
//         } if(count === 0){
//             counting.style.color ="black"
//         }
//         counting.innerHTML =`Count: ${count}`
//     })
// })


const person = [
    {name: "Ibraheem Bakare", job: "Pharmacist", info: "I am the best guy rigth now", hobby: "Reading", img: "/images/ororo.jpeg"},
    {name: "Abeeb Bakare", job: "Botanist", info: "I am the second best guy rigth now", hobby: "Sleeping", img: "/images/image-s1.png"},
    {name: "Toyyib Bakare", job: "Engineer", info: "I am the third best guy rigth now", hobby: "Talking", img: "/images/image-s4.png"},
]


let name = document.querySelector(".name")
let job = document.querySelector(".job")
let info = document.querySelector(".info")
let hobby = document.querySelector(".hobby")
let img = document.querySelector("img")
let btn = document.querySelector("button")
let btns = document.querySelector(".btns")

let currentCount = 0


window.addEventListener("DOMContentLoaded", function(e){
     btn.addEventListener("click", function(e){
 let newPerson = person.map(function(item){


        return `<h3>${item.name}</h3>
        <h3>${item.job}</h3>
        <h3>${item.info}</h3>
        <h3>${item.hobby}</h3>
        <img src=${item.img}>`
    })
    let div = document.querySelector(".div")
    div.innerHTML = newPerson[generateRandomNumber()]
})
})

btns.addEventListener("click", function(){
    let newPerson = person.map(function(item){
        return `<h3>${item.name}</h3>
        <h3>${item.job}</h3>
        <h3>${item.info}</h3>
        <h3>${item.hobby}</h3>
        <img src=${item.img}>`
    })
    let div = document.querySelector(".div")
    div.innerHTML = newPerson[increase()]
})

function generateRandomNumber(){
    return Math.floor(Math.random() * person.length)
}

function increase(){
    if(currentCount > 2){
       currentCount = 0
   }
   return currentCount++
   
}
