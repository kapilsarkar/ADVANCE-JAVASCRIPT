

//Primitive Data Types---

//7:--> string,number,boolean,null,undefined,Symbol.Undefined

//Non Primitive or Reference Data Types---

//3. Arrays Objects , Functions

//Stack Memory and Heap Memory

//In all Primitive Types Stack Memory is Used and in all Non Primitive Type Heap Memory is Used

//In Stack Memory whenever we declare any variable we get a copy of it means NO CHANGE IN THE ORIGINAL value

//In Heap Memory whenever we declare any Array, Object or Function we get a Reference of it means there will change in it's ORIGINAL value

let myYoutubeName = 'KapilSarkar'

let anotherName = myYoutubeName
anotherName = 'PikuSarkar'
console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    email :"k.sarkar81@gmail.com",
    upi : "abs@paytm"
}

let userTwo = userOne

userTwo.email = 'k.sarkar720@hmail.com'

console.log(userOne.email)
console.log(userTwo.email)

