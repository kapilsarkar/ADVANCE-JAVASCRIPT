//array---
const myArr = [1, 2, 3, 4, 5];
const myHeros = ["shaktimaan", "ironman"];

const myArr2 = new Array(10, 20, 30, 40, 50);
console.log(myArr[0]);
console.log(myHeros);
console.log(myArr2);

//array methods---

myArr.push(6);
myArr.push(7);
myArr.pop();
//myArr.shift()
console.log(myArr.includes(5));
console.log(myArr);

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

//slice.splice---

console.log("A", myArr);

const myNew1 = myArr.slice(1, 3);
console.log(myNew1);
console.log("B", myArr);

const myNew2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myNew2);

const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["dc", "splash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)

const another_array = [1,2,3 ,[4,5,6],7,[6,7 ,[4,5]]]

const real_another_array =another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray('Kapil'))
console.log(Array.from('Kapil'))

console.log(Array.from({fullName :'Kapil Sarkar'}))

let score1 = 100
let score2 = 200
let score3 = 300
 console.log(Array.of(score1,score2,score3))
