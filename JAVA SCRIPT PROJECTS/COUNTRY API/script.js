// <!-- https://restcountries.com/v3.1/all -->

// fetch('https://restcountries.com/v3.1/all').then((res)=>{
//   return res.json()  
// }).then((data)=>{
//    data.forEach((country)=>{
//       console.log(country)
//    })
// })


const countryCard = document.createElement('a')
countryCard.classList.add('countryCard')
const cardImg = document.createElement("img")
cardImg.src = "https://flagcdn.com/ss.svg"
countryCard.append(cardImg)
console.log(countryCard)