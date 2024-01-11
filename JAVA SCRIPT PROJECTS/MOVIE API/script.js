//https://www.omdbapi.com/?i=tt3896198&apikey=2b65b40a\

const BtnSearch = document.querySelector(".BtnSearch");
let url = "https://www.omdbapi.com/?i=tt3896198&apikey=2b65b40a"
BtnSearch.addEventListener("click",(e)=>{
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })
})