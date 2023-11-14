// const heading = document.getElementById('title').setAttribute('class','test heading')

// console.log(heading)


const title = document.getElementById('title')

title.style.backgroundColor ='green'
title.style.padding ='15px'
title.style.borderRadius = '5px'

console.log(title.textContent)
console.log(title.innerText)
console.log(title.innerHTML)

console.log(title.getElementsByClassName('heading'))

console.log(document.querySelector('h1'))

console.log(document.querySelector('h2'))

console.log(document.querySelector('#title'))

console.log(document.querySelector('.heading'))

console.log(document.querySelector('input[type="password"]'))

const myul = document.querySelector('ul')
myul.querySelector('li')

console.log(myul)

console.log(document.querySelectorAll('li'))

const tempLiList = document.querySelectorAll('li')

tempLiList[0].style.backgroundColor ='green'
tempLiList[0].style.color ='white'

tempLiList.forEach((l)=>{
   l.style.backgroundColor ='green'
})
 const tempClassList = document.getElementsByClassName('list-item')
console.log(tempClassList)



const myConvertedArray = Array.from(tempClassList)

console.log(myConvertedArray)

myConvertedArray.forEach((li)=>{
    li.style.color ='yellow'
})