//f97cc3e5fcb7435d869111902241804

//http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
 let key = "f97cc3e5fcb7435d869111902241804"
let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=asansol`
async function weather(){
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()
    console.log(data)
}

weather()