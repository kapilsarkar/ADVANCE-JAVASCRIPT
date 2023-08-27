//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting = 'Hello World'

for (const greet of greeting) {
    console.log(`Each Char is: ${greet}`)
}

//Maps

const map = new Map()

map.set('IN','India')
map.set('US','United States of America')
map.set('FR','France')

console.log(map)

for (const [key,value] of map) {
    console.log(key, ":", value)
}



const myObject = {
    js :'jaavscript',
    cp:'c++',
    py:'python',
    rb:'ruby',
    rc:'react',

}

for (const key in myObject) {
    console.log(`${key} fileName is for ${myObject[key]}`)
}

const programming = ['js','c++','java']

for (const key in programming) {
    console.log(programming[key])
}
//for each

const coding =['JAVA SCRIPT','TAILWIND','CSS']

coding.forEach(function(item){
    console.log(item)
})

coding.forEach((item)=>{
    console.log(item)
})

function printMe(item) {
  console.log(item)
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
  console.log(item,index,arr)
})

const myCoding = [
    {
        languageName :'Java Script',
        languageFileName :'js'
    },
    {
        languageName :'Python',
        languageFileName :'py'
    },
    {
        languageName :'C++',
        languageFileName :'c'
    },
]

myCoding.forEach((item)=>{
   console.log(`LanGuage Name : ${item.languageName} and Language File Name : ${item.languageFileName}`)
   
})