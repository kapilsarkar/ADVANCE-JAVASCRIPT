//api--https://dummyjson.com/products/category/smartphones

const searchBoxInput = document.querySelector(".searchBox");
const searchBtnInput = document.querySelector(".searchBtn");

const displayContainerOutput = document.querySelector(".displayContainer");
const url = "https://dummyjson.com/products/category/smartphones"
searchBtnInput.addEventListener("click",(e)=>{
   fetch(url).then((response)=>{
    return response.json()
    
   }).then((data)=>{
    console.log(data)
     
   }).then((products)=>{
      console.log(products)
   }).catch((err)=>{
      console.log(err)
   })
})