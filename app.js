'use strict';
let body=document.getElementsByTagName("body");
let main = document.getElementsByTagName("main");
let form = document.getElementById("empForm");
let select1 = document.getElementById("Department1");
let select2 = document.getElementById("Level1");
let section =document.getElementById("sec");

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
EmployeeInfo.prototype.render=function(){

let division =document.createElement('div');
division.style.width="300px";
division.style.height="360px";
 division.style.backgroundColor="#569344"; 
 division.style.margin="50px"
 division.style.borderRadius="3%"
division.style.display="flex";
 division.style.flexDirection="column" ;
division.style.aligncontent= "flex-end";
division.style.alignItems="center";
division.style.paddingTop="30px"

section.appendChild(division);

let imgEL=document.createElement("img");
imgEL.src= this.imageURL;
division.appendChild(imgEL);
division.appendChild(imgEL).width=250;
division.appendChild(imgEL).height=250;


let parEL1 = document.createElement('p');
parEL1.textContent=`Name :${this.fullName}-ID:${this.employeeID}`
division.appendChild(parEL1);

let parEL2 = document.createElement('p');
parEL2.style.marginTop="0";
parEL2.textContent=`Department: ${this.Department}-Level: ${this.level}`
division.appendChild(parEL2);

let parEL3 = document.createElement('p');
parEL3.style.marginTop="0";
parEL3.textContent=` ${this.salary}`
division.appendChild(parEL3);


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
newEmployee.render();

}
// creatSection() 
// {
//
// }   let newSection =document.createElement('sec').style="background-color: #477C37; display:flex; width:30%; flex-direction: column; align-items: center; border-radius:5%; ";
//   newSection.setAttribute(division1);
// body[0].appendChild(newSection);