//https://fakestoreapi.com/products
const url = "https://fakestoreapi.com/products";
const mensImg1 = document.querySelector(".men-part1Img");
const mensDesc1 = document.querySelector(".men-part1Desc");
const mensTitle1 = document.querySelector(".men-part1Title");
const menPrice1 = document.querySelector(".men-Part1Price");
const mensCloth = document.querySelector(".mens-partCategory");

const humbergerFullMenu = document.querySelector(".humbergerFullMenu");
const humburgerIcon = document.querySelector(".humburger-icon");
const closeIcon = document.querySelector(".closeIcon");

humburgerIcon.addEventListener("click", () => {
  humbergerFullMenu.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  humbergerFullMenu.style.display = "none";
});


//Function For Mens Category Part1 Starts
async function mensDisplayPart1() {
  try {
    const apiData = await fetch(url);
    console.log(apiData);
    const jsonValue = await apiData.json();
    console.log(jsonValue);
    const mensCategory = jsonValue.filter((ct) => {
      if (ct.category === "men's clothing") {
        return ct;
      }
    });
    console.log(mensCategory);
    const mensCategoryPart1 = mensCategory.filter((fr) => {
      if (fr.id === 2) {
        return fr;
      }
    });
    mensCategoryPart1.map((e) => {
      const men1id = e.id;
      mensCloth.innerHTML = e.category
      mensDesc1.innerHTML = e.description;
      mensImg1.src = e.image;
      mensTitle1.innerText = e.title;
      menPrice1.innerText = `${e.price}`;
     
    });
    console.log(mensCategoryPart1);
  } catch (err) {
    console.log(err);
  }
}


mensDisplayPart1();
//Function For Mens Category Part1 Ends
const mensImg2 = document.querySelector(".men-part2Img");
const mensDesc2 = document.querySelector(".men-part2Desc");
const mensTitle2 = document.querySelector(".men-part2Title");
const menPrice2 = document.querySelector(".men-Part2Price");
const mensCloth2 = document.querySelector(".mens-part2Category")
//Function For Mens Category Part2 Starts
async function mensDisplayPart2() {
  try {
    const apiData = await fetch(url);
    const jsonValue = await apiData.json();
    const menCategory = jsonValue.filter((ct) => {
      if (ct.category === "men's clothing") {
        return ct;
      }
    });
    const mensCategoryPart2 = menCategory.filter((fr) => {
      if (fr.id === 3) {
        return fr;
      }
    });
    mensCategoryPart2.map((e) => {
      const men2id = e.id;
      mensCloth2.innerHTML = e.category
      mensDesc2.innerHTML = e.description;
      mensImg2.src = e.image;
      mensTitle2.innerText = e.title;
      menPrice2.innerText = `${e.price}`;
    });
  } catch (err) {
    console.log(err);
  }
}
//Function For Mens Category Part1 Ends
mensDisplayPart2();
const cartNumber = document.querySelector(".cartNumber");

const menPart1Btn = document.querySelector(".men-part1Btn");
let num = 1;

const myData = JSON.parse(localStorage.getItem("myData")) || []

const addData = (category,title,price,image)=>{
  myData.push({category,title,price,image})
  localStorage.setItem("myData",JSON.stringify(myData))

  return category, title ,price,image
}



menPart1Btn.addEventListener("click", () => {
  
  cartNumber.innerText = num++;
  menPart1Btn.innerText = "Item Added";
  menPart1Btn.disabled = "true";
  addData(mensCloth.innerText,mensTitle1.innerText,menPrice1.innerText,mensImg1.src)
  
});





const menuPart2Btn = document.querySelector(".men-part2Btn");

menuPart2Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  menuPart2Btn.innerText = "Item Added";
  menuPart2Btn.disabled = "true";
  addData(mensCloth2.innerText,mensTitle2.innerText,menPrice2.innerText,mensImg2.src)
 
});

const cartTotalValue = document.querySelector("#cart");
// code for popup

const popup = document.querySelector(".popup");
const closePopUp = document.querySelector(".close-PopUp");


cartTotalValue.addEventListener("click",(e)=>{
  myData.map((m)=>{
     const allTitle = document.createElement("p");
     allTitle.classList.add("allTitle")
     console.log(allTitle.innerText= m.title)
     allTitle.innerHTML = `Product Name : ${ m.title}`
     popup.appendChild(allTitle)
     const allPrice = document.createElement("p")
     allPrice.classList.add("allPrice")
     allPrice.innerText = `Price : ${m.price}`
     popup.appendChild(allPrice)
     const DbImg = document.createElement("img")
     DbImg.classList.add("DbImg")
     DbImg.src = m.image
     popup.appendChild(DbImg)
     
  })
  let totalPrice = document.createElement("h2")
  totalPrice.classList.add("totalPrice")

    let tPrice = myData.reduce((acc,item)=>{
            return acc + parseFloat(item.price)
    },0)
   
    totalPrice.innerText =`Total Price:₹ ${tPrice}`
    popup.appendChild(totalPrice)
    const popUpBtnDiv = document.createElement("div")
    const popTotalBtn = document.createElement("button")
    popTotalBtn.innerText = "Confirm Order"
    popTotalBtn.classList.add("popTotalBtn")
    popUpBtnDiv.classList.add("popUpBtnDiv")
    popUpBtnDiv.appendChild(popTotalBtn)
    popup.appendChild(popUpBtnDiv)
  popup.classList.add("open")
})

closePopUp.addEventListener("click",()=>{
  popup.classList.remove("open")
})

//₹