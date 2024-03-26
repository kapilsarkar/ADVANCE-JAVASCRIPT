class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const kapil = new User("kapil@gmail.com","123")

console.log(kapil.password)
