async function makeAsyncRequest() {
  const url =
  "https://dummyjson.com/products/search?q=phone";
  const response = await fetch(url);
  const data = await response.json()
  //console.log(response)
  //console.log(data)
  //console.log('Kapil')
  return data
 

}

makeAsyncRequest().then((data)=>{
    console.log(data)
})




