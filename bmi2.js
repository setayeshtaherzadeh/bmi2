
function calculateBMI() {
        var height = document.getElementById("height-input").value;
        var weight = document.getElementById("weight-input").value;

        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);

        var resultDiv = document.getElementById("res");
        resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);

        if (bmi < 18.5) {
          resultDiv.style.backgroundColor = "#f1c40f";
          resultDiv.className = "underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
          resultDiv.style.backgroundColor = "#2ecc71";
          resultDiv.className = "normal";
        } else if (bmi >= 25 && bmi < 30) {
          resultDiv.style.backgroundColor = "#f39c4d";
          resultDiv.className ="overweight";
        } else {
          resultDiv.style.backgroundColor = "#e74c3c";
          resultDiv.className = "obese";
        }
      }
