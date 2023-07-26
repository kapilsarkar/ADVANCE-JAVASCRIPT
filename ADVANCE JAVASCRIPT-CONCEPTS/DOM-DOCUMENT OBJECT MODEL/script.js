//document.body.children[1].innerText ='Hello World'

//document.body.children[4].src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhy851nnmbwjBXnMzfAgZxo7Fa0Fl9Jtw38h8W4keag&s'

//const myParagraph = document.body.children[6]
//myParagraph.innerText='Hello DOM Manipulation'

//Selecting Element in Java Script---

//const allImges = document.getElementsByTagName('img')
//console.log(allImges)

//const cssImage = document.getElementsByClassName('css-image')

//console.log(cssImage)

//const cssImage2 = document.getElementById('css-image')
//console.log(cssImage2)

// const cssImage3 = document.querySelector('.css-image')
// console.log(cssImage3)

// const cssImage4 = document.querySelector('#css-image')
// console.log(cssImage4)

// const cssImage5 = document.querySelectorAll('#css-image')
// console.log(cssImage5)

//const cssTypeImage = document.querySelector('#cssTypes')

//cssTypeImage.src= 'https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg'

const ImageUrl = ['https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9EeSJgtad5jWkky-iMisJi7UFWOUu2Cg2w&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnDy8L0cLYBRbSlNLB4aI4TY-Mwogxl8pbg&usqp=CAU']

const AllImages = document.querySelectorAll('img')

// AllImages[0].src= ImageUrl[0]
// AllImages[1].src = ImageUrl[1]
// AllImages[2].src = ImageUrl[2]

// for(let i =0; i< AllImages.length; i++){
//        AllImages[i].src = ImageUrl[i]
// }

AllImages.forEach((image,i)=>{
       image.src = ImageUrl[i]
})