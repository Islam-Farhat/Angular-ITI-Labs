//1-
// let arr=[1,2,3,4];
// arr.push(5);
// arr.push(6);
// console.log(arr)
/////////////// Another
let arr:number[]=[];

arr.push(1);
arr.push(2);
console.log(arr)


//2-

//let arr2:string[]|number[]=[""] ///Just Accept number or string only not both
//let arr2:[number,string]=[1,"Islam"] // Accept number or string (both) in same order
let arr2:(number|string)[]=[] ///Accept string an number 

arr2.push("Farhat");
arr2.push("Adbelaziz");
arr2.push("Omar"); 
arr2.push(1);
console.log(arr2)

for (const key of arr2) {
      console.log(key)
}

//3-
let newVariable:number|boolean;
newVariable=12;
newVariable=true;


//4-
function sum (fnum:number=1,lnum:number=3):number
{
      return fnum+lnum;
}
console.log(sum(2,4))


//5
interface IEmployee{
     readonly id:number,
      name:string,
      username:string,
      email:string,
      address:{
            street:string,
            suite:string,
            city:string,
            zipcode:string,
            geo:{
                  lat:string,
                  lng:string,
            }
      }
}
let object:IEmployee={
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city:"Gwenborough",
            zipcode: "92998-3874",
            geo: {
                  lat: "-37.3159",
                  lng: "81.1496"
            }
}
}

class Employee implements IEmployee{
      constructor(readonly id: number, public name: string,  public username: string,public email:string,
                  public address:{street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}}) {}
}


class Manger extends Employee{
      constructor(readonly id: number, public name: string,  public username: string,public email:string,
            public address:{street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}})
            {
            super(id,name,username,email,address)
      }
      
      print():string
      {
            return`ID:${this.id} - Name: ${this.name} Address: ${this.address.city} `
      }
}

let emp =new Manger(1,"Islam","loma","Is@g.com",{city:"Ashmoun",street:"2",suite:"2",zipcode:"0000",geo:{lat:"-37.3159",lng:"81.1496"}})

console.log(emp.print())

////////////////////////////////////////////////////////////////////







