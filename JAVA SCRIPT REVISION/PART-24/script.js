//Spread using Array---

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]

const joinedArray = [...nums1,...nums2]

console.log(joinedArray)

//Spread Using Object---

const user = {
    fullName :'Kapil Sarkar',
    age: 32
}

const updateUser = {...user,city:'Asansol'}
console.log(updateUser)


//Spread Using Function---

function add(){
    let sum = 0
    for(let i=0;i< arguments.length; i++){
        sum+= arguments[i]
    }
    return sum
}

const additionResult = add(...joinedArray)

console.log(additionResult)

//Rest Parameter in java Script---

const numbers = [1,2,3,4,5]

function add2(...nums){
    let sum = 9
    for(let j=0; j< nums.length; j++ ){
        sum+= nums[j]
    }
    return sum
}

const Restresult = add2(2,40,60,100,200,500,1000)
console.log(Restresult)