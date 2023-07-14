//Function 1 ---
function a (msg,details,pin){
  console.log(msg,details,pin)
  console.log(typeof msg)
  console.log(typeof details)
  console.log(typeof pin)
}

a('Hello Welcome',{userName:'kapil',age:32},[1,5,9])

//Function 2 ----

function first(mfirst){
    console.log(mfirst)
    mfirst()
}

function second(){
    console.log('Hi Kapil Sarkar')
}

first(second)

first(function(){
    console.log('John Cena is Here')
})