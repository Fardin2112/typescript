type User = {
    readonly _id : string // readonly value cant be change further
    name : string 
    email : string
    isActive : boolean
}

let myUser : User = {
    _id : "123",
    name : "fardin",
    email : "fardin@gmial.com",
    isActive : false
}

myUser.email = "letsfuri2112@gmail.com"
// myUser._id = "369"
