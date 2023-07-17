const coding = ["php", "Java", "JavasCript", "python", "nodejs", "ruby"];

const values = coding.forEach((codingDetails) => {
  console.log(codingDetails);
  return codingDetails;
});

console.log(values);

//filter---
//Filter Number greater than 4
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNum = myNums.filter((nums) => {
  if (nums > 4) {
    return nums;
  }
});
console.log(filterNum);

//Using foreach for filtration ---

const filterValues = [];

myNums.forEach((item) => {
  if (item > 4) {
    filterValues.push(item);
  }
});

console.log(filterValues);

//Filter Examples---

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => {
  if (bk.genre === "History") {
    return bk;
  }
});
console.log(userBooks);

const userBooksYear = books.filter((bk) => {
  if (bk.publish > 1995 && bk.genre === "History") {
    return bk;
  }
});

console.log(userBooksYear);

//Map---

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Adding all the numbers of array by 10 using map---
numbers.map((value) => {
  console.log((value += 10));
});

//Using foreach---

numbers.forEach((value) => {
  console.log((value += 10));
});
//Chaining of methods---
const newNums = numbers
.map((value) => {
  return value * 10;
}).map((value)=>{
   return value + 1
}).filter((value) => {
     if(value >=40){
          return value
     }
});

console.log(newNums);

//Reduce function---

const hiNums = [1,2,3]
//Reduce by Normal function---
const hiTotal = hiNums.reduce(function(acc,currvalue){
     console.log(`acc:${acc} and currvalue : ${currvalue}`)
     return acc + currvalue
},0)

console.log(hiTotal)

//Reduce by arrow function---

const hiTotal2 = hiNums.reduce((acc,curr)=>{
     console.log(`acc:${acc} and curr ${curr}`)
     return acc + curr
},1)

console.log(hiTotal2)

// Example of reduce---

const shoppingCart = [
     {
          itemName :'JavaScript Course',
          price: 2999,
     },

     {
          itemName :'Python Course',
          price: 999,
     },

     {
          itemName :'Mobile Development Course',
          price: 5999,
     },

     {
          itemName :'Data Science Course',
          price: 12999,
     },

     {
          itemName :'Data Analysis  Course',
          price: 10999,
     }
]

const CartTotalPrice = shoppingCart.reduce((acc, item) =>  {
     return acc + item.price
},0)

console.log(CartTotalPrice)
