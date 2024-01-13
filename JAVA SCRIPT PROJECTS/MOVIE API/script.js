//https://www.omdbapi.com/?i=tt3896198&apikey=2b65b40a

//https://www.omdbapi.com/?t=pk&apikey=2b65b40a
let searchInput = document.querySelector("#movieSearch");
let BtnSearch = document.querySelector(".BtnSearch");
const movieTitle = document.querySelector(".movieTitle");
const movieDetails = document.querySelector(".movieDetails");
let key = "2b65b40a";

//let url = `https://www.omdbapi.com/?i=${movieName}&apikey=${key}`;



BtnSearch.addEventListener("click", function () {
   
  let movieName = searchInput.value
    if(movieName != ""){
      getMovie(movieName)
    }    
});

function getMovie(movie){
  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${key}`).then((res)=>{
    return res.json()
  }).then((data)=>{
   
    if(data.Response == "True"){
      movieTitle.innerHTML = `${data.Title}`
      movieDetails.innerHTML = `
      <img
      class="movieImage"
      src="${data.Poster}"
      alt="image" />   <div class="movieExtraDetails">
      <p class="movieGenre">MovieType: ${data.Genre}</p>
      <p class="movieActors">
        Actors : ${data.Actors}
      </p>
      <p class="moviePlot">
       Movie Plot:  ${data.Plot}
      </p>
      <p class="movieRating">IMDB RATING : ${data.imdbRating}</p>
      <p class="releasedDate">Released Date: ${data.Released}</p>
      <p class="moveRunTime">RunTime : ${data.Runtime}</p>
      <p class="movieDirector">Director: ${data.Director}</p>
      <p class="movieLanguage">Movie Language : ${data.Language}</p>
    </div>`
    }
    else{
      movieTitle.innerHTML = "WRONG DETAILS"
    }
  })
}






