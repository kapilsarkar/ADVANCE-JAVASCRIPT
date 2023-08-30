const buttons = document.querySelectorAll(".button");
//console.log(buttons)
const body = document.querySelector("body");
const heading = document.querySelector('.heading')

buttons.forEach((button) => {
  //console.log(button)
  button.addEventListener("mouseover", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundImage = "url(./images/hrithik.jpeg)";
      heading.innerText = 'HRITHIK ROASHAN'
      
      
    }
    if (e.target.id === "white") {
      //body.style.backgroundColor = e.target.id;
      body.style.backgroundImage = "url(./images/srk.jpg)";
      heading.innerText ='SHAHRUKH KHAN'
     
    }
    if (e.target.id === "blue") {
      //   body.style.backgroundColor = e.target.id;
      body.style.backgroundImage = "url(./images/aamir.webp)";
      heading.innerText ='AAMIR KHAN'
    }
   
  });
});
