"use strict";
//1-
// let arr=[1,2,3,4];
// arr.push(5);
// arr.push(6);
// console.log(arr)
/////////////// Another
let arr = [];
arr.push(1);
arr.push(2);
console.log(arr);
//2-
//let arr2:string[]|number[]=[""] ///Just Accept number or string only not both
//let arr2:[number,string]=[1,"Islam"] // Accept number or string (both) in same order
let arr2 = []; ///Accept string an number 
arr2.push("Farhat");
arr2.push("Adbelaziz");
arr2.push("Omar");
arr2.push(1);
console.log(arr2);
for (const key of arr2) {
    console.log(key);
}
//3-
let newVariable;
newVariable = 12;
newVariable = true;
//4-
function sum(fnum = 1, lnum = 3) {
    return fnum + lnum;
}
console.log(sum(2, 4));
let object = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};
class Employee {
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
}
class Manger extends Employee {
    constructor(id, name, username, email, address) {
        super(id, name, username, email, address);
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
    print() {
        return `ID:${this.id} - Name: ${this.name} Address: ${this.address.city} `;
    }
}
let emp = new Manger(1, "Islam", "loma", "Is@g.com", { city: "Ashmoun", street: "2", suite: "2", zipcode: "0000", geo: { lat: "-37.3159", lng: "81.1496" } });
console.log(emp.print());
////////////////////////////////////////////////////////////////////
