class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }
  get password(){
    return `${this._password}kapil`
  }
  set password(value){
      this._password = value.toUpperCase()
  }
}

const kapil = new User("kapil@gmail.com","abc")

console.log(kapil.password)
console.log(kapil.email)
