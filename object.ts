const User = {
    name : "fardin",
    role : "dev",
    rank : 80
}

function createObj({name:string, isPaid:boolean}){

}

//createObj({name:"fardin"})
let newUser = {name:"fardin",isPaid:false, areHuman:true}
console.log(createObj(newUser))


function createCourse ():{name:string,price:number}{

    return {name:"fardin",price:399}
}

export {}