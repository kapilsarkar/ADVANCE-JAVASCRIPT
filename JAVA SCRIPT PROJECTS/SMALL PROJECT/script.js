// const container = document.querySelector(".container");
// const card = document.querySelector(".card");
// const Name = document.querySelector(".name");
// const userName = document.querySelector(".userName");

// //let apiData =
// async function fetchData() {
//   try {
//     let data = await fetch(url);
//     console.log(data);
//     let jsonValue = await data.json();
//     console.log(jsonValue);
//     jsonValue.forEach((e) => {
//       console.log(e);
//       let div = document.createElement("div");
//       let h2 = document.createElement("h2");
//       div.classList.add("card");
//       h2.classList.add("name");
//       h2.innerText = e.name
//       div.appendChild(h2)
//       container.appendChild(div);
//       console.log(e.name);
//       console.log(e.username);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchData();

let url = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");


async function fetchApi() {
  try {
    let firstData = await fetch(url);
    console.log(firstData);

    let response = await firstData.json();
    console.log(response);
    response.map((e)=>{
        console.log(e)
        console.log(e.name)
        console.log(e.email)
        console.log(e.address)

        let div = document.createElement("div")
        div.classList.add("card")
        let h3 = document.createElement("h3")
        h3.innerHTML = e.name
        h3.classList.add("name")
        let emailPara = document.createElement("p")
        emailPara.classList.add("mail")
        emailPara.innerText = e.email
        div.append(h3,emailPara)
        container.append(div)

  })
  } catch (err) {
    console.log(err);
  }
}

fetchApi();
