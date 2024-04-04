// let url = "https://newsapi.org/v2/everything?q=viratkohli&apiKey=9a6cad2c29524869be31815d8d710b4d"
// let key = "9a6cad2c29524869be31815d8d710b4d"

// async function news(){
//     let newsData = await fetch(url)
//     let jsonData = await newsData.json()
//     console.log(jsonData)
//     //console.log(jsonData.articles)

// }

// news()

//9a6cad2c29524869be31815d8d710b4d

//https://newsapi.org/v2/everything?q=virat&apiKey=9a6cad2c29524869be31815d8d710b4d
let key = "9a6cad2c29524869be31815d8d710b4d";
let url = `https://newsapi.org/v2/everything?q=India&apiKey=${key}`;
let newsSection = document.querySelector(".news-section");

async function news() {
  let newsData = await fetch(url);
  let jsonValue = await newsData.json();
  console.log(newsData);
  console.log(jsonValue);

  jsonValue.articles.map((e) => {
    console.log(e);
   
    let newsCardDiv = document.createElement("div");
    newsCardDiv.classList.add("news-card");
    let newsTitle = document.createElement("h3");
    newsTitle.classList.add("news-card-title");
    let newsImage = document.createElement("img");
    newsImage.classList.add("news-card-img");
    let newsDesc = document.createElement("p");
    newsDesc.classList.add("news-desc");
    newsTitle.innerText = e.title
    newsImage.src=e.urlToImage
    newsDesc.innerText = e.description
   
    newsCardDiv.addEventListener("click",()=>{
      window.open(e.url,"_blank")
    })
    

    newsCardDiv.append(newsTitle,newsImage,newsDesc)
    newsSection.appendChild(newsCardDiv)
  });
}

news();
