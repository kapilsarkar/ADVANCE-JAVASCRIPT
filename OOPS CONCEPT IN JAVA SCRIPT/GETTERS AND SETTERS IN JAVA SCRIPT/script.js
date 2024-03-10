const user = {
    firstName :"Kapil",
    lastName : "Sarkar",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       const splitted = value.split(" ")
       console.log(splitted)
    }
}

console.log(user.fullName)

user.fullName = "Piku Sarkar"