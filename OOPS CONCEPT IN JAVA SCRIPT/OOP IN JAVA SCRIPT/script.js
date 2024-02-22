const user = {
  fitstName :"Kapil",
  lastName: "Sarkar",
  age:32,

  getAgeYear: function(){
    return console.log(new Date().getFullYear() - user.age) 
  }
}
console.log(user.getAgeYear())

