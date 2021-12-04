function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.floor(bmi);
    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + ". You are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi + ". You have normal weight.");
    } else if (bmi > 24.9) {
        alert("Your BMI is " + bmi + ". You are overweight.");
    }
}

var yourWeight = prompt("Enter your weight");
yourWeight = parseInt(yourWeight);
var yourHeight = prompt("Enter your height");
yourHeight = parseFloat(yourHeight);
bmiCalculator(yourWeight, yourHeight);