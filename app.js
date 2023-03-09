'use strict';
const employee =[];
function EmployeeInfo(employeeID,fullName,Department,level,imageURL){
     this.employeeID=employeeID;
     this.fullName=fullName;
     this.Department=Department;
     this.level=level;
     this.imageURL=imageURL;
     this.salary=0;
     employee.push(this);
}
EmployeeInfo.prototype.randomSalary =function (min , max) {
let randomValue=Math.floor(Math.random() * (max - min) ) + min;
let netSalary=randomValue -(randomValue * (7.5/100));
this.salary=netSalary;
    return netSalary ;
   
}
EmployeeInfo.prototype.render=function(){
    document.write(`<h4>employeeID: ${this.employeeID} </br></br> fullName:${this.fullName} </br></br> Department:${this.Department } </br></br> level:${this.level }</br></br> imageURL:${this.imageURL} </br></br> salary: ${this.salary }</h4> `);

}
let ghazi =new EmployeeInfo (1000,"Ghazi sameer","Administration","Senior","./HR_Functions01.jpg" );
ghazi.randomSalary(1500,2000);
ghazi.render();

 let lana =new EmployeeInfo (1001,"Lana Ali","Finance","Senior","");
 lana.randomSalary(1500,2000);

let tamara =new EmployeeInfo (1002,"Tamara Ayoub","Marketing","Senior","");
tamara.randomSalary(1500,2000);

 let safi =new EmployeeInfo (1003,"Safi Walid","Administration","Mid-Senior","");
 safi.randomSalary(1000,1500);

let omar =new EmployeeInfo (1004,"Omar Zaid","Development","Senior","");
omar.randomSalary(1500,2000);

 let rana =new EmployeeInfo (1005,"Rana Saleh","Development","Junior","");
 rana.randomSalary(	500	,1000);

let hadi =new EmployeeInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","");
hadi.randomSalary(	1000,1500);

for (let i=0 ; i<employee.length;i++)
{
    employee[i].render();
}