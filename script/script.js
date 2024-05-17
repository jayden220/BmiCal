let kgInput = document.querySelector('.weight');
let cmInput = document.querySelector('.height');
let answerInput = document.querySelector('.result'); // Changed from display to input
let calculateButton = document.querySelector('button');

calculateButton.addEventListener('click', calculateBmi);

function calculateBmi(){
    let kg = parseFloat(kgInput.value);
    let cm = parseFloat(cmInput.value);
    
    // Check if inputs are valid numbers
    if (isNaN(kg) || isNaN(cm) || kg <= 0 || cm <= 0) {
        answerInput.value = "Invalid values.";
        return;
    }
    
    let meters = cm / 100;
    let bmi = kg / (meters * meters);
    
    answerInput.value = bmi.toFixed(2) + " (" + statusBmi(bmi) + ")";
}

function statusBmi(bmi){
    if(bmi < 18.5){
        return  "Underweight";
    }else if (bmi >= 18.5 && bmi < 25){
        return "Normal"
    }else if (bmi >= 25 && bmi < 30 ){
        return "Overweight"
    }else 
        return "Obese"   
}