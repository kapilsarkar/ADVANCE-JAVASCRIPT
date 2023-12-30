const countryName = new URLSearchParams(location.search).get('name');
const flagImage = document.querySelector(".country-details img")
const countryNameH1 = document.querySelector(".country-details h1")
const nativeName = document.querySelector(".native-name")
const population = document.querySelector(".population")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".subRegion")
const capital = document.querySelector(".capital")
const topLevelDomain = document.querySelector(".top-level-domain")
const currencies = document.querySelector(".currencies")
const languages = document.querySelector(".languages")

console.log(countryName)

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>{
    return res.json()
}).then(([country])=>{
    console.log(country)
   
    
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    if(country.name.nativeName){
       
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
    }
    else{
        nativeName.innerText = country.name.common
    }
    population.innerText = country.population
    region.innerText = country.region
    subRegion.innerText = country.subregion
    capital.innerText = country.capital?.[0]
    topLevelDomain.innerText = country.tld.join(", ")
    if(country.currencies){
        Object.values(country.currencies).map((currency)=>{
            return currencies.innerText = currency.name
        })
    }
    languages.innerText = Object.values(country.languages).join(", ")
    
})

//code for border countries


console.log(country);
      if (country.borders) {
        
        country.borders.forEach((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => {
              // console.log(borderCountry)
              const borderCountryTag = document.createElement('a')
              borderCountryTag.innerText = borderCountry.name.common
              borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
              borderCountries.append(borderCountryTag)
            })

        })
    }
    
