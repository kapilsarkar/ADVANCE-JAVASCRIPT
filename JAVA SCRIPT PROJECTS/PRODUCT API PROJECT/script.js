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
            return acc + parseInt(item.price)
    },0)
   
    totalPrice.innerText =`Total Effective Price:₹ ${tPrice}`
    popup.appendChild(totalPrice)
    const popUpBtnDiv = document.createElement("div")
    const popTotalBtn = document.createElement("button")
    const popCancelBtn = document.createElement("button")

    popTotalBtn.innerText = "Confirm Order"
    popCancelBtn.innerText = "Cancel Order"
    popCancelBtn.classList.add("popCancelBtn")
    popTotalBtn.classList.add("popTotalBtn")
    popUpBtnDiv.classList.add("popUpBtnDiv")

   popTotalBtn.addEventListener("click",()=>{
     localStorage.clear()
     totalPrice.innerText = "Congratulations Order Confirmed"
     
     setInterval(() => {
      location.reload()
     },5000);
   })
   popCancelBtn.addEventListener("click",()=>{
    localStorage.clear()
    totalPrice.innerText = "Order Cancelled"
    
    setInterval(() => {
     location.reload()
    },5000);
   })

  

    popUpBtnDiv.appendChild(popTotalBtn)
    popUpBtnDiv.appendChild(popCancelBtn)
    popup.appendChild(popUpBtnDiv)
  popup.classList.add("open")
})

closePopUp.addEventListener("click",()=>{
  popup.classList.remove("open")
})

// CODE FOR JEWELRY  PART1---

const jewelImg1 = document.querySelector(".jewls-part1Img")
const jewelDesc1 = document.querySelector(".jewl-part1Desc")
const jewelTitle1 = document.querySelector(".jewl-part1Title")
const jewelPrice1 = document.querySelector(".jewl-Part1Price")
const jewel1 = document.querySelector(".jewl1-partCategory");

async function jewelDisplayPart1(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const jewelCategory1 = jsonValue.filter((ct)=>{
      if(ct.category === "jewelery"){
         return ct
      } 
    }) 

    const jewelCateGoryPart1 = jewelCategory1.filter((fr)=>{
      if(fr.id === 8){
        return fr
      }
    })

    jewelCateGoryPart1.map((e)=>{
      jewelImg1.src = e.image
      jewelDesc1.innerText = e.description
      jewelPrice1.innerText = e.price
      jewel1.innerHTML = e.category
      jewelTitle1.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
jewelDisplayPart1()
const jewlePart1Btn = document.querySelector(".jewl-part1Btn");

jewlePart1Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  jewlePart1Btn.innerText = "Item Added"
  jewlePart1Btn.disabled = true
  addData(jewel1.innerText,jewelTitle1.innerText,jewelPrice1.innerText,jewelImg1.src)
})

// CODE FOR JEWELRY  PART2---

const jewelImg2 = document.querySelector(".jewls-part2Img")
const jewelDesc2 = document.querySelector(".jewl-part2Desc")
const jewelTitle2 = document.querySelector(".jewl-part2Title")
const jewelPrice2 = document.querySelector(".jewl-Part2Price")
const jewel2 = document.querySelector(".jewl2-partCategory");

async function jewelDisplayPart2(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const jewelCategory2 = jsonValue.filter((ct)=>{
      if(ct.category === "jewelery"){
         return ct
      } 
    }) 

    const jewelCateGoryPart2 = jewelCategory2.filter((fr)=>{
      if(fr.id === 6){
        return fr
      }
    })

    jewelCateGoryPart2.map((e)=>{
      jewelImg2.src = e.image
      jewelDesc2.innerText = e.description
      jewelPrice2.innerText = e.price
      jewel2.innerHTML = e.category
      jewelTitle2.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
jewelDisplayPart2()

const jewlePart2Btn = document.querySelector(".jewl-part2Btn");

jewlePart2Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  jewlePart2Btn.innerText = "Item Added"
  jewlePart2Btn.disabled = true
  addData(jewel2.innerText,jewelTitle2.innerText,jewelPrice2.innerText,jewelImg2.src)
})

// CODE FOR ELECTRONICS  PART1---

const elecImg1 = document.querySelector(".elec-part1Img")
const elecDesc1 = document.querySelector(".elec-part1Desc")
const elecTitle1 = document.querySelector(".elec-part1Title")
const elecPrice1 = document.querySelector(".elec-Part1Price")
const elec1 = document.querySelector(".elec-part1Category");

async function elecDisplayPart1(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const elcCategory1 = jsonValue.filter((ct)=>{
      if(ct.category === "electronics"){
         return ct
      } 
    }) 

    const elecCateGoryPart1 = elcCategory1.filter((fr)=>{
      if(fr.id === 9){
        return fr
      }
    })

    elecCateGoryPart1.map((e)=>{
      elecImg1.src = e.image
      elecDesc1.innerText = e.description
      elecPrice1.innerText = e.price
      elec1.innerHTML = e.category
      elecTitle1.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
elecDisplayPart1()

const elecPart1Btn = document.querySelector(".elec-part1Btn");

elecPart1Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  elecPart1Btn.innerText = "Item Added"
  elecPart1Btn.disabled = true
  addData(elec1.innerText,elecTitle1.innerText,elecPrice1.innerText,elecImg1.src)
})

// CODE FOR ELECTRONICS  PART2---

const elecImg2 = document.querySelector(".elec-part2Img")
const elecDesc2 = document.querySelector(".elec-part2Desc")
const elecTitle2 = document.querySelector(".elec-part2Title")
const elecPrice2 = document.querySelector(".elec-Part2Price")
const elec2 = document.querySelector(".elec-part2Category");


async function elecDisplayPart2(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const elcCategory2 = jsonValue.filter((ct)=>{
      if(ct.category === "electronics"){
         return ct
      } 
    }) 

    const elecCateGoryPart2 = elcCategory2.filter((fr)=>{
      if(fr.id === 12){
        return fr
      }
    })

    elecCateGoryPart2.map((e)=>{
      elecImg2.src = e.image
      elecDesc2.innerText = e.description
      elecPrice2.innerText = e.price
      elec2.innerHTML = e.category
      elecTitle2.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
elecDisplayPart2()

const elecPart2Btn = document.querySelector(".elec-part2Btn");

elecPart2Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  elecPart2Btn.innerText = "Item Added"
  elecPart2Btn.disabled = true
  addData(elec2.innerText,elecTitle2.innerText,elecPrice2.innerText,elecImg2.src)
})

// CODE FOR WOMEN  PART1---

const womenImg1 = document.querySelector(".women-part1Img")
const womenDesc1 = document.querySelector(".women-part1Desc")
const womenTitle1 = document.querySelector(".women-part1Title")
const womenPrice1 = document.querySelector(".women-Part1Price")
const women1 = document.querySelector(".women-part1Category");


async function womenDisplayPart1(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const womenCategory1 = jsonValue.filter((ct)=>{
      if(ct.category === "women's clothing"){
         return ct
      } 
    }) 

    const womenCateGoryPart1 = womenCategory1.filter((fr)=>{
      if(fr.id === 18){
        return fr
      }
    })

    womenCateGoryPart1.map((e)=>{
      womenImg1.src = e.image
      womenDesc1.innerText = e.description
      womenPrice1.innerText = e.price
      women1.innerHTML = e.category
      womenTitle1.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
womenDisplayPart1()

const womenPart1Btn = document.querySelector(".women-part1Btn");

womenPart1Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  womenPart1Btn.innerText = "Item Added"
  womenPart1Btn.disabled = true
  addData(women1.innerText,womenTitle1.innerText,womenPrice1.innerText,womenImg1.src)
})

// CODE FOR WOMEN  PART2---


const womenImg2 = document.querySelector(".women-part2Img")
const womenDesc2 = document.querySelector(".women-part2Desc")
const womenTitle2 = document.querySelector(".women-part2Title")
const womenPrice2 = document.querySelector(".women-Part2Price")
const women2 = document.querySelector(".women-part2Category");


async function womenDisplayPart2(){
  try{
    const apiData = await fetch(url)
    const jsonValue = await apiData.json()
    const womenCategory2 = jsonValue.filter((ct)=>{
      if(ct.category === "women's clothing"){
         return ct
      } 
    }) 

    const womenCateGoryPart2 = womenCategory2.filter((fr)=>{
      if(fr.id === 19){
        return fr
      }
    })

    womenCateGoryPart2.map((e)=>{
      womenImg2.src = e.image
      womenDesc2.innerText = e.description
      womenPrice2.innerText = e.price
      women2.innerHTML = e.category
      womenTitle2.innerText = e.title
    })


  }
  catch(err){
     console.log(err)
  }
}
womenDisplayPart2()

const womenPart2Btn = document.querySelector(".women-part2Btn");

womenPart2Btn.addEventListener("click",()=>{
  cartNumber.innerText = num++
  womenPart2Btn.innerText = "Item Added"
  womenPart2Btn.disabled = true
  addData(women2.innerText,womenTitle2.innerText,womenPrice2.innerText,womenImg2.src)
})


// CODE FOR MAIN TITLE ANIMATION
var textWrapper = document.querySelector('.titleHead .letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.titleHead .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




  anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
