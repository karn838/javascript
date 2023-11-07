//_ underscore btata hai private propetry use kr rha hu normal user k use me nhi hia
class User{
    constructor(email,password){
        this.email=email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()//_password (underscore use krne se stack full hone se bach jaenge kyuki nhi daalenge underscore)
                                           //to constructor ya get kha se lena hai value confuse ho jaega
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const avnish = new User("a@avnish.ai","123")
console.log(avnish.email)
console.log(avnish.password)