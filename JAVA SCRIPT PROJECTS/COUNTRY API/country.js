const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");

console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => {
    return res.json();
  })
  .then(([country]) => {
    console.log(country);

    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;
    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }
    population.innerText = country.population;
    region.innerText = country.region;
    subRegion.innerText = country.subregion;
    capital.innerText = country.capital?.[0];
    topLevelDomain.innerText = country.tld.join(", ");
    if (country.currencies) {
      Object.values(country.currencies).map((currency) => {
        return (currencies.innerText = currency.name);
      });
    }
    languages.innerText = Object.values(country.languages).join(", ");
    
    if(country.borders){
        country.borders.forEach((border)=>{
          console.log(border)
          fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=> {
           return res.json()
          }
          ).then((data)=>{
            console.log(data)
          })
        })
    }
  });

//code for border countries
