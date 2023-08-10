//Q-1
function fruit(){
    console.log(fullName)  //Undefined
    //console.log(price)  //Error

    var fullName = 'Kapil Sarkar'
    let price = 50
}

fruit()

//Q-2

for(var i =0; i< 3 ; i++){  //var has global scope
    setTimeout(()=>
        console.log(i),1
    )
}

//Q-3

for(let i =0 ; i< 3; i++){  // let has block scope
    setTimeout(()=>{
        console.log(i),1
    })
}

//q-4

console.log(+true)
console.log(+typeof true)

//Q-5

console.log('Kapil')
console.log(typeof ('Kapil'))