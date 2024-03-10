const user = {
    firstName :"Kapil",
    lastName : "Sarkar",
    fulName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.fulName())