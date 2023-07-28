const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

//container.appendChild(h1)
container.appendChild(h1.cloneNode(true))

//Clone Node---

//h1.cloneNode(true)

container.appendChild(card.cloneNode(true))
//container.appendChild(card.cloneNode(true))

const newCard = card.cloneNode()
newCard.innerText = 2

container.appendChild(newCard)

for(let i =3; i<=20; i++){
    const newCrad2 = card.cloneNode()
    newCrad2.innerText = i
    container.appendChild(newCrad2)
}

container.append('hello Kapil')

for(let j= 21; j<=50; j++){
    const newCard3 =card.cloneNode()
    newCard3.innerText = j
    container.append(newCard3)
}

container.append(h1 ,'Hello','World')