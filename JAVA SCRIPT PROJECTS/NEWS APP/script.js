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

let url = "https://newsapi.org/v2/everything?q=india&apiKey=9a6cad2c29524869be31815d8d710b4d"

async function news(){
    let newsData = await fetch(url)
    let jsonValue = await newsData.json()
    console.log(newsData)
    console.log(jsonValue)
}

news()