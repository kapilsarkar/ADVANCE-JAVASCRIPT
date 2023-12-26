const countryName = new URLSearchParams(location.search).get('name');
const flagImage = document.querySelector(".country-details img")
const countryNameH1 = document.querySelector(".country-details h1")

console.log(countryName)

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    flagImage.src = data[0].flags.svg
    
})