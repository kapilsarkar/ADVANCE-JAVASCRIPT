//if
const temperature = 41

if(temperature === 41){
   console.log('less than 50')
}
else{
    console.log('temperature greater than 50')
}

const score = 200

if(score > 100){
   const power = "fly"
   console.log(`User power : ${power}`)
}

const balance = 1000

//if(balance > 500) console.log('test')
if(balance < 500){
  console.log('less than 500')
}
else if(balance < 750 ){
    console.log('les than 750')
}

else if(balance < 900){
    console.log('less than 900')
}

else{
    console.log('less than 1200')
}

const isUserLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(isUserLoggedIn && debitCard ){
    console.log('Allowed to buy courses')
}
if(loggedinFromGoogle || loggedinFromEmail){
    console.log('user logged In')
}

//switch

const month = 'march'

switch (month) {
    case 'jan':
        console.log('January')
        break;
    case 'feb':
        console.log('February')
        break;
    case 'march':
        console.log('March')
        break;
    case 'april':
        console.log('April')
        break;
    case 'may':
        console.log('May')
        break;

    default:
        console.log('Default case Matched ')
        break;
}

//truth and falsy values

const userEmail = []

if(userEmail){
    console.log('Got User Email')
}

else{
    console.log('Do not have user Email')
}

//falsy values ---> false , 0,-0,bigInt,0n, "",null,undefined,NaN

//truth values --->  "0","false"," ",[],{},function(){}
 if(userEmail.length === 0){
     console.log('Array is Empty')
 }

 const emptyObject = {}

 if (Object.keys(emptyObject).length ===  0) {
    console.log('Object is Empty')
 }

 //Nullish Coalescing Operator (??) : null undefined

let val1 

//val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1)
let var1

var1 = undefined ??  15
console.log(var1)

//Ternary Operator

//condition ? true : false

const IceTeaPrice = 100

IceTeaPrice <= 80 ? console.log('Less than 80') : console.log('More than 80')