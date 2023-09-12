const start1btn = document.querySelector(".start1btn");
const socialStarPic = document.querySelector("#social-starsPic1");
const star1 = document.querySelector(".star1");
const socialstarsPicName = document.querySelector(".social-starsPicName");
const IconLike1 = document.querySelector("#IconLike1");
const CountLike1 = document.querySelector("#CountLike1");
const IconDisLike1 = document.querySelector("#IconDisLike1");
const CountDisLike1 = document.querySelector("#CountDisLike1");
const socialCount1 = document.querySelector(".socialCount1");
const IconComment1 = document.querySelector("#IconComment1");
const comment1 = document.querySelector(".comment1");
const  Start1comments = document.querySelector('.Start1comments')
window.addEventListener("load", (e) => {
  socialStarPic.style.backgroundImage = "url(./images/banner.jpg)";

  socialCount1.style.visibility = "hidden";
});
start1btn.addEventListener("click", function (e) {
  if (start1btn.innerText === "Follow") {
    start1btn.innerText = "Following";
  } else {
    start1btn.innerText = "Follow";
  }
});

star1.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/hrithik2.jpg)";
  socialstarsPicName.innerText = "Hrithik Roshan";
  socialCount1.style.visibility = "visible";
});
let like1 = 0;
IconLike1.addEventListener("click", (e) => {
  IconLike1.style.color = "#e72e0d";
  like1++;
  CountLike1.innerText = `${like1} Likes`;
});
let dislike1 = 0;
IconDisLike1.addEventListener("click", (e) => {
  IconDisLike1.style.color = "#e72e0d";
  dislike1++;
  CountDisLike1.innerText = `${dislike1} DisLikes`;
});

IconComment1.addEventListener("click", function (e) {
   IconComment1.style.color = "green";
        //Add Comments
    
    let input = document.createElement('input')
    input.className ='List1'
     input.addEventListener('change',(e)=>{
        let inputValue = input.value 
        Start1comments.append(inputValue)
        input.style.visibility = 'hidden'
     })
    

    Start1comments.appendChild(input)
   
});

