function addTwo(num : number):number{
    return num+3;
}

function getUpper( val:string){
    return val.toUpperCase()
}

const getHello = (str : string):string => {
    return "Hello" + str
}

console.log(getUpper("hello"));
console.log(addTwo(4));
console.log(getHello("Fardin"));
