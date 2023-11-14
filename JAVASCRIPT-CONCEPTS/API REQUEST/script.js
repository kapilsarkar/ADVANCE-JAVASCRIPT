const requestURL = "https://api.github.com/users/kapilsarkar";
const showData = document.querySelector(".showData");

const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.followers);
    const Btn = document.createElement("button");
    Btn.innerText = "Click Here";
    //Btn.classList.add(BtnClick)
    showData.appendChild(Btn);

    Btn.addEventListener("click", (e) => {
      let para = document.createElement("para");
      showData.appendChild(para);
      para.innerText = `${data.name} Your Followers are ${data.followers}`;
      let ImageCard = document.createElement("img");

      ImageCard.src = data.avatar_url;
      showData.appendChild(ImageCard);
    });
  }
};

xhr.send();

//parse--> converts json to string
