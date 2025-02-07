"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "fardin",
    role: "dev",
    rank: 80
};
function createObj(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//createObj({name:"fardin"})
var newUser = { name: "fardin", isPaid: false, areHuman: true };
console.log(createObj(newUser));
function createCourse() {
    return { name: "fardin", price: 399 };
}
