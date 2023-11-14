//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

for (let i = 1; i <= 3; i++) {
  console.log(`Outer Loop Value :${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`Inner Loop Value : ${j} and inner Loop value ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

myArray.map((e) => {
  console.log(`Through Map Method ${e}`);
});

myArray.forEach((e) => {
  console.log(`Through For Each Method ${e}`);
});

//break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is: ${index}`);
}

//while loop
let k = 0;
while (k <= 10) {
  console.log(`Value of k is ${k}`);
  k += 2;
}

const myArray2 = ["Shaktimaan", "Hulk", "IronMan"];
let arr = 0;
while (arr < myArray2.length) {
  console.log(`Value is ${myArray2[arr]}`);
  arr += 1;
}

//do while loop
let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
