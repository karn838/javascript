const User = {
    _email : "hc@chc",
    _password:"afd",

    get email(){
      return this._email.toLocaleUpperCase()
    },
    set email(value){
       this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);