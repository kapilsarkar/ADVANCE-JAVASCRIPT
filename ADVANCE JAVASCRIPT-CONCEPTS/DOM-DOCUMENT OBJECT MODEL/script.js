document.body.children[1].innerText ='Hello World'

document.body.children[4].src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhy851nnmbwjBXnMzfAgZxo7Fa0Fl9Jtw38h8W4keag&s'

const myParagraph = document.body.children[6]
myParagraph.innerText='Hello DOM Manipulation'

//Selecting Element in Java Script---

const allImges = document.getElementsByTagName('img')
console.log(allImges)

const cssImage = document.getElementsByClassName('css-image')

console.log(cssImage)