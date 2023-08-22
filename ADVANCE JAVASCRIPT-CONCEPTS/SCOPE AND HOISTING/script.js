//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // var c = 30
  console.log("INNER:", a);
}
console.log("GLOBAL:", a);
//console.log(b)
//console.log(c)

function one() {
  const userName = "Kapil";

  function two() {
    const website = "YOUTUBE";
    console.log(userName);
  }
  //console.log(website);

  two();
}
one();

if (true) {
  const userName = "Piku";
  if (userName === "Piku") {
    const website = "GOOGLE";
    console.log(userName + website);
  }
  //console.log(website)
}
//console.log(userName)

//********** IMPORTANT */

console.log(addOne(5))
function addOne(num) {
  return num + 1;
}


 addTwo(5) //Error
const addTwo = function(num){
  return num +2
}

//console.log(addTwo(5))

