'use strict'
let table = document.getElementById("table");
let form = document.getElementById("getData");
console.log("hello")

// function getDataLs (){
// var numAdministration=0;
// var salarA=0;
// var numMarketing=0;
// var salaryM=0;
// var numFinance=0;
// var salaryF=0;
// var numDevelopment=0;
// var salaryD=0;
//     let arrInfo =localStorage.getItem('employeeInformation');
//     let arrToObj=JSON.parse(arrInfo);
//     console.log(arrToObj);
//     if(arrToObj!=null){
//         for(let i=0 ;i<arrToObj.length;i++){
// if(arrToObj[i].Department=="Administration"){
//     numAdministration +=1;
//     salarA +=arrToObj[i].salary;
// }    
// else if (arrToObj[i].Department=="Marketing"){
//     numMarketing +=1;
//     salaryM +=arrToObj[i].salary;
// }
// else if (arrToObj[i].Department=="Finance"){
//      numFinance +=1;
//      salaryF +=arrToObj[i].salary;
//     }
// else if (arrToObj[i].Department=="Development"){
//     numDevelopment +=1;
//     salaryD +=arrToObj[i].salary;
// }
  
//       }
//     }
//     console.log(numAdministration,numMarketing,numFinance,numDevelopment,salarA,salaryM,salaryF,salaryD);
//     renderTable(numAdministration,numMarketing,numFinance,numDevelopment,salarA,salaryM,salaryF,salaryD);
// }


// function renderTable(sumA,sumM, sumF,sumD,salA,salM,salF,salD){

//   let trEl1=document.createElement('tr');
//   table.appendChild(trEl);

// let tdElA =document.createElement('td')
// tdElA.textContent="Administration";
//   trEl1.appendChild(tdElA);

//   let tdsumA =document.createElement('td')
//   tdsumA.textContent=sumA;
//   trEl1.appendChild(tdsumA);

//   let tdavgA =document.createElement('td')
//   tdavgA.textContent=salA/sumA;
//   trEl1.appendChild(tdavgA);

//   let tdsalaryA =document.createElement('td')
//   tdsalaryA.textContent=salA;
//   trEl1.appendChild(tdsalaryA);
// //*****************************************************
//   let trEl2=document.createElement('tr');
//   table.appendChild(trEl2);

// let tdElM =document.createElement('td')
// tdElM.textContent="Marketing";
//   trEl2.appendChild(tdElM);

//   let tdsumM =document.createElement('td')
//   tdsumM.textContent=sumM;
//   trEl2.appendChild(tdsumM);

//   let tdavgM =document.createElement('td')
//   tdavgM.textContent=salM/sumM;
//   trEl2.appendChild(tdavgM);

//   let tdsalaryM =document.createElement('td')
//   tdsalaryM.textContent=salM;
//   trEl2.appendChild(tdsalaryM);
// //*************************************************** */
// let trEl3=document.createElement('tr');
//   table.appendChild(trEl3);

// let tdElF =document.createElement('td')
// tdElF.textContent="Finance";
// trEl3.appendChild(tdElF);

//   let tdsumF =document.createElement('td')
//   tdsumF.textContent=sumF;
//   trEl3.appendChild(tdsumF);

//   let tdavgF =document.createElement('td')
//   tdavgF.textContent=salF/sumF;
//   trEl3.appendChild(tdavgF);

//   let tdsalaryF =document.createElement('td')
//   tdsalaryF.textContent=salF;
//   trEl3.appendChild(tdsalaryF);
//  // ***********************************************
//  let trEl4=document.createElement('tr');
//   table.appendChild(trEl4);

// let tdElD =document.createElement('td')
// tdElD.textContent="Development";
// trEl4.appendChild(tdElD);

//   let tdsumD =document.createElement('td')
//   tdsumD.textContent=sumD;
//   trEl4.appendChild(tdsumD);

//   let tdavgD =document.createElement('td')
//   tdavgD.textContent=salD/sumD;
//   trEl4.appendChild(tdavgD);

//   let tdsalaryD =document.createElement('td')
//   tdsalaryD.textContent=salD;
//   trEl4.appendChild(tdsalaryD);

// }
// form .addEventListener("submit",submitHandeler);
// function submitHandeler(event){
//   event.preventDefault();
//   getDataLs();

// }