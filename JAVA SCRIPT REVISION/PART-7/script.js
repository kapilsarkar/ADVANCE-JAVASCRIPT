//Objects in java Script---

//There is only one type of non-primitive data type that is object

const user = {
  firstName: "Kapil",
};
console.log(user);
console.log(user.firstName);

const user1 = {
  fName: "Kapil",
  lName: "Sarkar",
};

const user2 = {
  fName: "Kapil",
  lName: "Sarkar",
};

console.log(user1 === user2); //False  because  their address are different in memory they are  also called reference types because there address are different in memory

console.log(user2);
console.log(user2["lName"]);

const myCricketer = "Virat Kohli";
const details = {
  fullName: "Kapil Sarkar",
  addrress: "Asansol",
  contactno: 9564694403,
  hobbies: {
    first: "Cricket",
    second: "WWE",
    food: {
      favorite: "Chicken Biryani",
    },
  },
};

console.log(`My Full Name is : ${details.fullName}`);
console.log(details[myCricketer]);

//For adding new values to object---

details.age = 32;

console.log(
  `My Full Nmae is : ${details.fullName} and my age is : ${details.age}`
);
console.log(details);

details.hobbies.food.new = "Mutton Biryani";
console.log(details.hobbies.food.new);
console.log(details.hobbies.second);
details["is-student"] = true;
console.log(details);
details.fullName = "Piku Sarkar";
console.log(details.fullName);

//Objects freeze vs Objects seal in Java Script---

let superstar = "Hrithik Roshan";
superstar = "Shahrukh Khan";
console.log(superstar);

const myDetails = {
  fName: "Piku",
  lName: "Sarkar",
  myAddress: {
    city: "Burnpur",
    state: "West Bengal",
    pin: "713325",
    moreDetails: {
      population: 784564674,
      area: 2345556,
    },
  },
  age:29, 
  isGraduate:true,
};
myDetails.mobileNo = 7908927633 
console.log(myDetails)

delete myDetails.myAddress.moreDetails.area
delete myDetails.myAddress.moreDetails

Object.seal(myDetails)

delete myDetails.fName

myDetails.star = 'MS DHONI'

myDetails.fName = 'John'
console.log(myDetails.fName)

Object.freeze(myDetails)

myDetails.fName = 'Rock'
console.log(myDetails.fName)

console.log('mobileNo' in myDetails)
console.log('star' in myDetails)