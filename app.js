'use strict';
function EmployeeInfo(employeeID,fullName,Department,level,imageURL){
     this.employeeID=employeeID;
     this.fullName=fullName;
     this.Department=Department;
     this.level=level;
     this.imageURL=imageURL;
     this.salary=0;
}
EmployeeInfo.prototype.randomSalary =function (min , max) {
let randomValue=Math.floor(Math.random() * (max - min) ) + min;
let netSalary=randomValue -(randomValue + (7.5/100));
this.salary=netSalary;
    return netSalary ;
   
}
EmployeeInfo.prototype.render=function(){
    document.write(`<h4>employeeID: ${this.employeeID} </br></br> fullName:${this.fullName} </br></br> Department:${this.Department } </br></br> level:${this.level }</br></br> imageURL:${this.imageURL} </br></br> salary: ${this.salary }</h4> `);

}
let Ghazi =new EmployeeInfo (1000,"Ghazi sameer","Administration","Senior","./HR_Functions01.jpg" );
Ghazi.randomSalary(1500,2000);
Ghazi.render();

 let Lana =new EmployeeInfo (1001,"Lana Ali","Finance","Senior","");
 Lana.randomSalary(1500,2000);
Lana.render();

let Tamara =new EmployeeInfo (1002,"Tamara Ayoub","Marketing","Senior","");
Tamara.randomSalary(1500,2000);

 let Safi =new EmployeeInfo (1003,"Safi Walid","Administration","Mid-Senior","");
 Safi.randomSalary(1000,1500);
 
let Omar =new EmployeeInfo (1004,"Omar Zaid","Development","Senior","");
Omar.randomSalary(1500,2000);

 let Rana =new EmployeeInfo (1005,"Rana Saleh","Development","Junior","");
 Rana.randomSalary(	500	,1000);

let Hadi =new EmployeeInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","");
Hadi.randomSalary(	1000,1500);