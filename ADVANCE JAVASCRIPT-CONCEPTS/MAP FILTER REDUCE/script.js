const coding = ["JAVA SCRIPT", "CSS", "REACT", "NODE JS", "EXPRESS JS"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);

// For Each does Not return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  return num > 5;
});

console.log(newNums);

const newNums2 = [];

myNums.forEach((num) => {
  if (num > 5) {
    newNums2.push(num);
  }
});

console.log(newNums2);

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

const userBooksEdition = books.filter((bk) => {
  if (bk.edition >= 2000 && bk.genre === "History") {
    return bk;
  }
});

console.log(userBooksEdition);

//map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapNumbers = myNumbers.map((num) => {
  return num + 10;
});

console.log(mapNumbers);

//using For Each

const mapNumbers2 = [];

myNumbers.forEach((num) => {
  mapNumbers2.push(num + 10);
});

console.log(mapNumbers2);

const ChainNums = myNumbers.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    if (num > 30) {
        return num
    }
})
console.log(ChainNums)

//reduce

const reduceNums = [1,2,3]
const myTotals = reduceNums.reduce( function(acc , currval) {
    console.log(`acc value ${acc} and currValue ${currval} `)
   return acc + currval
},0)

console.log(myTotals)

const myTotals2 = reduceNums.reduce( (acc,crr)=>{
     return acc + crr
},0)

console.log(myTotals2)

const shoppingCart = [
    {
        itemName :'JS COurse',
        price : 2999
    },
    {
        itemName :'PYTHON',
        price : 999
    },
    {
        itemName :'REACT NATIVE',
        price : 9999
    },

]

const TotalPrice = shoppingCart.reduce ( (acc, item)=> {
     return acc + item.price
},0 )


console.log(TotalPrice)