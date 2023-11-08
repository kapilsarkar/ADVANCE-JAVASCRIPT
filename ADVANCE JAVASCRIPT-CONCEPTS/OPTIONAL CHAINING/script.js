const user = {
  firstName: "Kapil",
  lastName: "Sarkar",
  age: 32,
  address:{
    city:"Delhi"
  },
  getFullName: function(){
    return user.firstName+ " " + user.lastName
  }
};
const a = "city"
console.log(user.firstName);

console.log(user.address && user.address.city);
//optional chaining---
console.log(user.address?.city);
console.log(user.address?.[a])

console.log(user.getFullName?.())
