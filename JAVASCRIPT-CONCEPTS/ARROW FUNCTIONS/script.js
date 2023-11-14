const user = {
  userName: "Kapil",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , Welcome To Website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();

console.log(this);

function chai() {
    let userName = 'Piku'
  console.log(this.userName);
}

chai()

const chai2 = function(){
    let userName = 'John'
    console.log(this.userName)
}

chai2()

const chai3 = () =>{
    let userName = 'John'
    console.log(this.userName)
}

chai3()

//const addTwo = (num1,num2) => (num1 + num2)
   
const addTwo = (num1,num2) => ({userName :'Kapil Sarkar'})



console.log(addTwo(5,10))

const myArray = [2,5,7]
myArray.forEach((e)=>{
  console.log(e)
})

myArray.map((e)=>{
    console.log(e)
})
