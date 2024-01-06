// <!-- https://restcountries.com/v3.1/all -->

const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((country) => {
      console.log(country);
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href =`/country.html?name=${country.name.common}`
      countryCard.innerHTML = ` <img src=" ${country.flags.svg}" alt="${country.name.common}" />
    <div class="card-text">
      <h3 class="card-title">${country.name.common}</h3>
      <p><b>Population: </b>${country.population}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital}</p>
    </div>`;

      countriesContainer.append(countryCard);
    });
  });

  //code for filter by region

  const filterByRegion = document.querySelector(".filter-by-region");
//https://restcountries.com/v3.1/region/europe
  filterByRegion.addEventListener("change",(e)=>{
    console.log(e.target.value)
  })