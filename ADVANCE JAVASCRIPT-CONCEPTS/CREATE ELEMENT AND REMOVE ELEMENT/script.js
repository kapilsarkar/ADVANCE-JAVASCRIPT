const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// const newImg = document.querySelector("img");

// for (let i = 2; i <= 100; i++) {
//   const PokemonImg = newImg.cloneNode();
//   PokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(PokemonImg)
// }

const paragraph = document.createElement('p')
// paragraph.innerText ='Hello Kapil Sarkar'
// paragraph.classList.add('my-para')
// paragraph.id = 'hi'
// container.append(paragraph)

// const newImage = document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// container.append(newImage)

for(let i =1 ; i<=100;i++){
    // const newImage = document.createElement('img')
    // const para = document.createElement('p')
    // newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    // para.innerText = i
    // newImage.classList.add('img-container')
    // para.classList.add('img-container')
    // container.append(newImage,para)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    
    const newImage = document.createElement('img')
    newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage,paragraph)
    container.append(imgContainer)
    
}

const deleteImg = document.querySelector("body > div > div:nth-child(4)")

deleteImg.remove()
