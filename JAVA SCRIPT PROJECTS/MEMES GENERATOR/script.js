//const url = "https://meme-api.com/gimme/wholesomememes"

const generateBtn = document.querySelector(".generateBtn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const authorOutput = document.querySelector(".authorName")

function getMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        const {author,title,url} = data
         console.log(data)
         console.log(author)
         console.log(title)
         console.log(url)
         memeTitle.innerText = title
         authorOutput.innerText = author
         memeImage.src = url
    });
}
 getMeme()
generateBtn.addEventListener("click", () => {
   getMeme()
});
