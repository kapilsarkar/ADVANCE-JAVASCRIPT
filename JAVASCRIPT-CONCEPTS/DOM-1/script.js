const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "green";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES :", parent.childNodes);


const div = document.createElement('div')
console.log(div)
div.className = 'main'
div.id = Math.round(Math.random()*10 +1) 
div.setAttribute('title','generated title')
div.style.backgroundColor = 'green'
div.style.padding ='12px'
//div.innerText ='Hello Kapil Sarkar' 

const addText = document.createTextNode('Hello Kapil Sarkar')

div.appendChild(addText)

document.body.appendChild(div)