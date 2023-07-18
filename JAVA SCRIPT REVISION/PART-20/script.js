// call apply bind in js
//Call---
const person1 = {
    fname : 'Kapil',
    lname :'Sarkar',
    fullName : function(hometown,country){
        return this.fname + ' ' + this.lname + ' ' + hometown + ' ' + country
    }
}

const person2 = {
    fname :'Piku',
    lname :'Sarkar',
}

console.log(person1.fullName.call(person2, 'Asansol','India'))

//apply---

console.log(person1.fullName.apply(person2, ['Asansol','India']))

//bind---

  const result = person1.fullName.bind(person2, 'Asansol','India')

  console.log(result)

  console.log(result())