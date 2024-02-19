//var vs let vs const
//Scopes

{
  var a = 5;
}
console.log(5);

//Variable Shadowing---

function test() {
  let a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test();

//Illegal Shadowing---

function test2() {
  var a = "Hello Shadow";
  //let b = "Bye";
  if (true) {
    let a = "Hi Shadow";
    var b = "GoodBye";
    console.log(a);
    console.log(b);
  }
}

test2();
//Hoisting---
console.log(count)
var count = 1

function abc(){
    console.log(a,b,c)
    const c = 30
    let b = 20
     var a = 10
}

abc()
//Temporal Dead Zone
