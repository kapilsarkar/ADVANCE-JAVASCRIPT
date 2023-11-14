const user = {
    userName :'Kapil',
    price:'999',

    welcomeMessage : function(){
        console.log(`${this.userName}, Welcome to Website`)
        console.log(this)
    }
}

user.welcomeMessage()

user.userName ='Piku'

user.welcomeMessage()

console.log(this)

function chai(){
    let userName = 'John'
    console.log(this.userName)
}
chai()

const chai2 = function(){
    let uName ='Brock'
    console.log(this.uName)
}

chai2()

const chaiArrow = ()=>{
    let userName = 'Chody Rodes'
    console.log(this.userName)

}

chaiArrow()

const addTwo = (num1,num2) =>{
  return num1 + num2
}

console.log(addTwo(5,10))

const addThree = (val1,val2,val3) => (val1 + val2 + val3)

console.log(addThree(20,40,60))