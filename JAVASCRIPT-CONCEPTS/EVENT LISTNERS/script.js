const card = document.querySelector('.card')
const h1 = document.querySelector('h1')
const container = document.querySelector('.container')

function sayHi(){
    console.log('Hiiiii')
}

//h1.onclick = sayHi 

h1.addEventListener('click',sayHi)

h1.addEventListener('click',function(){
    console.log('Say Double Hiii')
})

h1.addEventListener('click',()=>{
    console.log('Say Triple hiii')
})

card.addEventListener('click',function(){
    console.log('Hello Kapil Welcome to your Card Section')
})



function CreateCard(){
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    container.append(newCard)
}

card.addEventListener('click',CreateCard)

let count = 1

card.addEventListener('click', ()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText= count
    count++
    container.append(newCard)
})