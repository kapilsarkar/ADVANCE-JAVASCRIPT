//https://api.adviceslip.com/advice

const adviceIdInput = document.querySelector(".adviceId");
const mainAdviceInput = document.querySelector(".mainAdvice");
const clickIconBtn = document.querySelector(".clickIcon");
let url = "https://api.adviceslip.com/advice"
clickIconBtn.addEventListener("click",(e)=>{
   fetch(url).then((response)=>{
     return response.json()
   }).then((data)=>{
    console.log(data)
    const {slip:{id:userId,advice:userAdvice}}= data
    //console.log(userId)
    //console.log(userAdvice)
    adviceIdInput.innerText = `ADVICE # ${userId}`
    mainAdviceInput.innerText = `"${userAdvice}"`
   }).catch((error)=>{
      console.log(error)
   })

})

