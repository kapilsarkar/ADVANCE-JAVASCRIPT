//CLASSES---

class User {
  constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
  }
  encryptPassword(){
    return `${this.password}abc`
  }
  changeUserName(){
    return `${this.username.toUpperCase()}`
  }
}

const kapil = new User("Kaps","kaps@gmail.com","123")

console.log(kapil.encryptPassword())
console.log(kapil.changeUserName())

//A constructor is called whenever qn object is initialized from class a constructor is called

//behind the scene--or second approach

function user(username,email,password){
  this.username = username
  this.email = email
  this.password = password
}

user.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

user.prototype.changeUserName = function(){
  return `${this.username.toUpperCase()}`
}

const piku = new user("piku","piku@gmail.com","564")
console.log(piku.encryptPassword())
console.log(piku.changeUserName())

//INHERITANCE---

class UserInheritance {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME IS ${this.username}`)
  }
}

class Teacher extends UserInheritance{
  constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`New Course Added By ${this.username}`)
  }
}

const TeacherResult = new Teacher("JOHN","HOHN@GMAIL.COM","555")

TeacherResult.addCourse()

const TeacherResult2 = new UserInheritance("SACHIN TENDULKAR")
TeacherResult.logMe()
TeacherResult2.logMe()

console.log(TeacherResult === TeacherResult2)

//static properties---

class UserStatic {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME IS  ${this.username}`)
  }

  static createId(){
    return `123`
  }
}

const staticResult = new UserStatic("VIRAT")
console.log(staticResult.createId())
