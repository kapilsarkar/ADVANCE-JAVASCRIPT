function SetUserName(username){
    this.userName = username
    console.log("called")
}

function CreateUser(username,email,password){

    SetUserName.call(this,username)
   this.email = email
   this.password = password
}

const chai = new CreateUser("KAPIL","kapil@gmail.com","kapil")
console.log(chai)