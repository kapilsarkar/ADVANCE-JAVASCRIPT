const title = document.getElementById('title')

console.log(title)
console.log(title.id)
console.log(title.className)
console.log(title.getAttribute('id'))
console.log(title.getAttribute('class'))
console.log(title.setAttribute('class','test heading'))
title.style.backgroundColor = 'green'
title.style.padding ='15px'
title.style.borderRadius ='15px'
console.log(title.textContent)
console.log(title.innerHTML)
console.log(title.innerText)

const heading2 = document.querySelector('h2')
console.log(heading2)

const inputPassword = document.querySelector("input[type='password'")
console.log(inputPassword)

const myul = document.querySelector('ul')

const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor ='green'
turnGreen.style.padding ='10px'
turnGreen.innerText ='Five'

const tempLiList = document.querySelectorAll('li')
console.log(tempLiList)
tempLiList[0].style.color ='pink'

tempLiList.forEach( (l) => {
    l.style.backgroundColor ='green'
} )

const tempClassList = document.getElementsByClassName('list-item')
console.log(tempClassList)



const myConvertedArray = Array.from(tempClassList)
console.log(myConvertedArray)

myConvertedArray.forEach((li)=>{
   li.style.backgroundColor ='Red'
})