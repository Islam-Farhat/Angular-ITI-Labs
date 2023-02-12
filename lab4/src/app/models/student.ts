interface IStudent{
      id:number,
      name:string,
      age:number
}
export class Student implements IStudent{
constructor(public id:number,public name:string,public age:number){}
}
