//Functions in Java Script---

function introduceMe(){
    console.log('Hi')
    console.log('Hi my Name is Kapil Sarkar')
    console.log('I am a Web Developer')
}
introduceMe()

function introduction(userName='On going Process',eduction='Learning',age = 'Counting'){
   console.log(`Hi My Name is ${userName} `)
   console.log(`I am a ${eduction}`)
   console.log(`My age is ${age} years old`)
}

introduction('Kapil Sarkar','Software Engineer','32')
introduction('John Cena','Electrical Engineer','46')
introduction()

//Function with return type---

function addition(a,b){
    return a + b
}


const result = addition(10,150)
console.log(result)