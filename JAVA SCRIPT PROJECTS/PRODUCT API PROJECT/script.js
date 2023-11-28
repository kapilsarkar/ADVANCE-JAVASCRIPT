//https://fakestoreapi.com/products

const productsSelectInput = document.querySelector("#productsSelect");
const searchBtnInput = document.querySelector(".SearchBtn");

const displayContainerOutput = document.querySelector(".displayContainer");
const url = "https://fakestoreapi.com/products"
searchBtnInput.addEventListener("click",(e)=>{
    async function productDisplay(){
        try{
            const apiData = await fetch(url)
            const jsonValue = await apiData.json()
            console.log(jsonValue)
            
        }
        catch(err){
            console.log(err)
        }
         
    }
    productDisplay()
})

