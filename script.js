let grade = document.getElementById("grade");
let speed = document.getElementById("speed");
let salary = document.getElementById("salary");

grade.addEventListener("click", (e) => {
  e.preventDefault();
  let inputGrade = parseInt(document.getElementById("input-grade").value);
  console.log(inputGrade);
  let finalOutput = "marks";
  // write Code For the Code challenge

  if (inputGrade > 79) {
    finalOutput = "A";
  } else if (inputGrade >= 60) {
    finalOutput = "B";
  } else if (inputGrade >= 50) {
    finalOutput = "C";
  } else if (inputGrade >= 40) {
    finalOutput = "D";
  } else if (inputGrade <= 39) {
    finalOutput = "E";
  } else {
    finalOutput = "Invalid Input";
  }

  console.log(finalOutput);

  
  document.getElementById("marks-id").append(finalOutput);
});
speed.addEventListener("click", (e) => {
  e.preventDefault();
  let inputSpeed = parseInt(document.getElementById("input-speed").value);
  console.log(inputSpeed);
  let finalOutput = "inputSpeed";
  // write Code For the Code challenge

  let demeritPoints = 0;

  if (inputSpeed < 70) {
    finalOutput = "Ok";
  } else {
    demeritPoints = Math.floor((inputSpeed - 70) / 5);
    finalOutput = `Points: ${demeritPoints}`;

    if (demeritPoints >= 12) {
      finalOutput = "License suspended";
    }
  }

  console.log(finalOutput);

  
  document.getElementById("speed-id").append(finalOutput);
});
salary.addEventListener("click", (e) => {
    e.preventDefault();
    let inputSalary = parseInt(document.getElementById("input-salary").value);
    console.log(inputSalary);
    let finalOutput;
  // write Code For the Code challenge
  //const prompt = require("prompt-sync")();

const basicSalary = parseInt(prompt("Enter your basic salary: "));
const benefits = parseInt(prompt("Enter your benefits: "));

// KRA tax rates
let payee;
if (basicSalary + benefits <= 24000) {
  payee = 0;
} else if (basicSalary + benefits <= 40667) {
  payee = (basicSalary + benefits - 24000) * 0.1;
} else if (basicSalary + benefits <= 57733) {
  payee = 1667 + (basicSalary + benefits - 40667) * 0.15;
} else if (basicSalary + benefits <= 73333) {
  payee = 4250 + (basicSalary + benefits - 57733) * 0.2;
} else if (basicSalary + benefits <= 89667) {
  payee = 8250 + (basicSalary + benefits - 73333) * 0.25;
} else {
  payee = 14050 + (basicSalary + benefits - 89667) * 0.3;
}

// NHIF rates
let nhif;
if (basicSalary + benefits < 6000) {
  nhif = 150;
} else if (basicSalary + benefits < 8000) {
  nhif = 300;
} else if (basicSalary + benefits < 12000) {
  nhif = 400;
} else if (basicSalary + benefits < 15000) {
  nhif = 500;
} else if (basicSalary + benefits < 20000) {
  nhif = 600;
} else if (basicSalary + benefits < 25000) {
  nhif = 750;
} else if (basicSalary + benefits < 30000) {
  nhif = 850;
} else if (basicSalary + benefits < 35000) {
  nhif = 900;
} else if (basicSalary + benefits < 40000) {
  nhif = 950;


} else {
nhif = 1000;
}

// NSSF rates
const nssf = basicSalary * 0.06;

// Compute gross pay and net pay
const grossPay = basicSalary + benefits;
const totalDeductions = payee + nhif + nssf;
const netPay = grossPay - totalDeductions;

// Display results
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Pay: ${grossPay}`);
console.log(`Payee: ${payee}`);
console.log(`NHIF: ${nhif}`);
console.log(`NSSF: ${nssf}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Pay: ${netPay}`);
finalOutput = `${netPay}`;
console.log("finalOutput");
  
  document.getElementById("salary-id").append(finalOutput);
});
