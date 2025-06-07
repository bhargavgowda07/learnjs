// Conditional Statements Example: Pension Eligibility Checker

let age = 65; // You can change this value to test different ages

// 1. if statement
if (age >= 60) {
  console.log("You are eligible for pension.");
}

// 2. if-else statement
if (age < 60) {
  console.log("You are not eligible for pension yet.");
} else {
  console.log("You are eligible for pension.");
}

// 3. else-if ladder
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult but not yet eligible for pension.");
} else if (age >= 60 && age <= 100) {
  console.log("You are a senior citizen eligible for pension.");
} else {
  console.log("Invalid age entered.");
}

// 4. switch statement
let category = "senior";

switch (category) {
  case "child":
    console.log("Children are not eligible for pension.");
    break;
  case "adult":
    console.log("Adults below 60 are not eligible for pension.");
    break;
  case "senior":
    console.log("Seniors are eligible for pension.");
    break;
  default:
    console.log("Category not recognized.");
}

// 5. Ternary Operator
let result = (age >= 60) ? "Pension Granted" : "Pension Denied";
console.log(result)