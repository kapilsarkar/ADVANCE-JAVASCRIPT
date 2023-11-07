const user = {
    myName:"Kapil Sarkar",
    age:32,
}
try{
    console.log(user.address.city)
}
catch(err){
    console.log(err.message)
}
finally{
    console.log("Hi Kapil")
}
async function makeAsyncRequest() {
    try{
        const url =
        "https://dumyjson.com/products/search?q=phone";
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        return data
    }
   catch(err){
    console.log(err)
   }
  }
  
  makeAsyncRequest()