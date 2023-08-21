

function sayMyName() {
    console.log('K')
    console.log('A')
    console.log('P')
    console.log('I')
    console.log('L')
}

sayMyName();

(function hi(){
    console.log('Hi Kapil')
})();

function addTwoNumber (number1,number2){
//    let result = number1 + number2
//    return result
     return number1 + number2
 
}
const result = addTwoNumber(5,10);

console.log('Result is :',result)

function LoginUserMessage(username ="sam"){
    if(!username ){
      console.log('Please Enter a UserName')
      return
    }
   return `${username} just logged in`
}
console.log(LoginUserMessage())
console.log(LoginUserMessage("Kapil"))

function calculateCartPrice(...num1){
   return num1
}

console.log(calculateCartPrice(100,200,300))

const user = {
    userName :'Kapil',
    price :199
}

function handleObject(anyObject){
  console.log(`UsrName is : ${anyObject.userName} and Price is ${anyObject.price}`)
}

handleObject(user)

const myNewArray = [100,200,300,400,500]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myNewArray))