'use strict';
let body=document.getElementsByTagName("body");
let main = document.getElementsByTagName("main");
let form = document.getElementById("empForm");
let select1 = document.getElementById("Department1");
let select2 = document.getElementById("Level1");
let section1 =document.getElementById("sec1")
let section2 =document.getElementById("sec2")
let section3 =document.getElementById("sec3")
let section4 =document.getElementById("sec4")
let section5 =document.getElementById("sec5")
let section6 =document.getElementById("sec6")
let section7 =document.getElementById("sec7")
const secArray=[section1,section2,section3,section4,section5,section6,section7];
var creat =0;

//let division1 =document.getElementById("div1")
var id = 1000;

function EmployeeInfo(employeeID,fullName,Department,level,imageURL){
     this.employeeID=employeeID;
     this.fullName=fullName;
     this.Department=Department;
     this.level=level;
     this.imageURL=imageURL;
     this.salary=0;
}
EmployeeInfo.prototype.randomSalary =function () {
    if (this.level == "Senior"){
      let  min =1500;
      let  max =2000;
        let randomValue = Math.floor(Math.random() * (max - min) ) + min;
let netSalary = randomValue -(randomValue * (7.5/100));
this.salary = netSalary;
    }
   else if (this.level == "Mid-Senior"){
     let min = 1000;
     let max = 1500;
        let randomValue = Math.floor(Math.random() * (max - min) ) + min;
let netSalary = randomValue -(randomValue * (7.5/100));
this.salary = netSalary;
    }
    else if (this.level == "Junior"){
        let min = 500;
        let max = 1000;
           let randomValue = Math.floor(Math.random() * (max - min) ) + min;
   let netSalary = randomValue -(randomValue * (7.5/100));
   this.salary = netSalary;
       }
}
EmployeeInfo.prototype.render=function(indexVal){

  // let section1 =document.createElement('sec').style="background-color: #477C37; display:flex; width:30%; flex-direction: column; align-items: center; border-radius:5%; ";
  // body[0].appendChild(section1);

let imgEL = document.createElement('img');
imgEL.src= this.imageURL;
secArray[indexVal].appendChild(imgEL).width=250;
secArray[indexVal].appendChild(imgEL).height=250;
secArray[indexVal].appendChild(imgEL);

let parEL1 = document.createElement('p');
parEL1.textContent=`Name :${this.fullName}-ID:${this.employeeID}`
secArray[indexVal].appendChild(parEL1);

let parEL2 = document.createElement('p');
parEL2.textContent=`Department: ${this.Department}-Level: ${this.level}`
secArray[indexVal].appendChild(parEL2);

let parEL3 = document.createElement('p');
parEL3.textContent=` ${this.salary}`
secArray[indexVal].appendChild(parEL3);


}
// let Ghazi =new EmployeeInfo (1000,"Ghazi sameer","Administration","Senior","./HR_Functions01.jpg" );
//  let Lana =new EmployeeInfo (1001,"Lana Ali","Finance","Senior","");
// let Tamara =new EmployeeInfo (1002,"Tamara Ayoub","Marketing","Senior","");
//  let Safi =new EmployeeInfo (1003,"Safi Walid","Administration","Mid-Senior","");
// let Omar =new EmployeeInfo (1004,"Omar Zaid","Development","Senior","");
//  let Rana =new EmployeeInfo (1005,"Rana Saleh","Development","Junior","");
// let Hadi =new EmployeeInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","");

form .addEventListener("submit",submitHandeler);
function submitHandeler(event){
  event.preventDefault();
  let empName=event.target.fullName.value;
  let imgUrll = event.target.imgurl.value;
 let depName =select1.options[select1.selectedIndex].value;
 let empLevel = select2.options[select2.selectedIndex].value;
// function creatSection ();
  function creatId (){
    id=id +1;
    return id  ;
  }
let newEmployee = new EmployeeInfo(creatId(),empName , depName , empLevel , imgUrll )
newEmployee.randomSalary();
newEmployee.render(creat);
creat +=1;
}
// creatSection() 
// {
//
// }   let newSection =document.createElement('sec').style="background-color: #477C37; display:flex; width:30%; flex-direction: column; align-items: center; border-radius:5%; ";
//   newSection.setAttribute(division1);
// body[0].appendChild(newSection);