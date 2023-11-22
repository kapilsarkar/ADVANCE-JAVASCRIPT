//api--https://dummyjson.com/products/category/smartphones

const searchBoxInput = document.querySelector(".searchBox");
const searchBtnInput = document.querySelector(".searchBtn");

const displayContainerOutput = document.querySelector(".displayContainer");
const url = "https://official-joke-api.appspot.com/random_joke"
searchBtnInput.addEventListener("click",(e)=>{
   fetch(url).then((response)=>{
    return response.json()
    
   }).then((data)=>{
    console.log(data)
    const {punchline,setup,type} = data
    console.log(punchline)
    console.log(setup)
    console.log(type)
     
   }).catch((err)=>{
      console.log(err)
   })
})