//var vs let vs const
//Scopes

{var a = 5}
console.log(5)

//Variable Shadowing---

function test(){
    let a = "Hello"
    if(true){
        let a = "Hi"
        console.log(a)
    }
    console.log(a)
}

test()


