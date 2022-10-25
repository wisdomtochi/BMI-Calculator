// DOM QUERIES
// this is the first name code
let firstNameEl = document.getElementById("firstname-el")
let firstNameInput = document.getElementById("firstname-input")
let firstNameValue = []

// this is the last name code
let lastNameEl = document.getElementById("lastNameEl")
let lastNameInput = document.getElementById("lastname-input")
let lastNameValue = []

// this is the age code
let age = document.getElementById("age-el")
let ageInput = document.getElementById("age-input")
let ageValue = []

let messageEl = document.getElementById("message-el")

//  my weight code 
let weight = document.getElementById("weight-el")
let weightInput = document.getElementById("weight-input")
let weightValue = []

// my height code
let height = document.getElementById("height-el")
let heightInput = document.getElementById("height-input")
let heightValue = []




// the submit  button code
let submitBtn = document.getElementById("submit-btn").addEventListener("click", () => {
  weightValue.push(weightInput.value)
  heightValue.push(heightInput.value)
  firstNameValue.push(firstNameInput.value)
  lastNameValue.push(lastNameInput.value)
  ageValue.push(ageInput.value)

  if (ageValue > 150) {
    alert("Reduce Your Age Number")
  }

// this is the code that runs the BMI
  let message = ""
  const name = firstNameValue + " " + lastNameValue

  let BMI = weightValue / heightValue
  if (BMI < 18.5) {
    message += name + " You Are Underweight!"
  }
  else if (BMI > 18.5 & BMI < 24.9) {
    message += name + " You Are Healthy!"
  }
  else if (BMI > 24.9 & BMI < 30) {
    message += name + " You Are Overweight!"
  }
  else if (BMI >= 30.0) {
    message += name + " You Are Obese!"
  }
  messageEl.textContent += message

  weightInput.value = ""
  heightInput.value = ""
  firstNameInput.value = " "
  lastNameInput.value = " "
  ageInput.value = ""
})