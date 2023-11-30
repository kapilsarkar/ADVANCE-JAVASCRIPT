//https://fakestoreapi.com/products
const url = "https://fakestoreapi.com/products"
const mensImg1 = document.querySelector(".men-part1Img")
const mensDesc1 = document.querySelector(".men-part1Desc")
const mensTitle1 = document.querySelector(".men-part1Title")
const menPrice1 = document.querySelector(".men-Part1Price")
async function mensDisplay(){
    try{
      const apiData = await fetch(url)
      console.log(apiData)
      const jsonValue = await apiData.json()
      console.log(jsonValue)
      const mensCategory = jsonValue.filter((ct)=>{
        if(ct.category === "men's clothing"){
            return ct
        }
      })
      console.log(mensCategory)
     const mensCategoryPart1 = mensCategory.filter((fr)=>{
        if(fr.id === 1){
            return fr
        }
     })
     mensCategoryPart1.map((e)=>{
        const men1id = e.id
        mensDesc1.innerHTML = e.description
        mensImg1.src = e.image
        mensTitle1.innerText = e.title
        menPrice1.innerText = `₹${e.price}`
        
     })
     console.log(mensCategoryPart1)
    }
    catch(err){
        console.log(err)
    }
}
mensDisplay()

