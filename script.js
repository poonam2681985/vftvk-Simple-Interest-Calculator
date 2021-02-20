var principal = 0;
var interestRate = 0;
var termOfLoan = 0;
var amount = 0;


function updateSlider(slideAmount)
{
var sliderDiv = document.getElementById("result");
sliderDiv.innerHTML = slideAmount;
}

function compute(){
event.preventDefault();   
  var principal = parseFloat(document.getElementById("principal").value);
if(principal<0)
	{
        alert("enter positive number in amount");
        document.getElementById("principal").focus();
        }
else
{
  var d = new Date();
  var interestRate1 = parseFloat(document.getElementById("rate").value);
  interestRate = interestRate1 / 100;
  var termOfLoan = parseFloat(document.getElementById("years").value);
  var simpleInt = principal * interestRate * termOfLoan;
  var amount = principal + simpleInt;
  var years = d.getFullYear() + termOfLoan;
  document.getElementById("s1").innerHTML = "if you deposit:" + principal;
  document.getElementById("s2").innerHTML = "At an Interest Rate of :" + interestRate1 + "%";
  document.getElementById("s3").innerHTML = "You will receive an amount of :" + amount;
  document.getElementById("s4").innerHTML = "In the year of :" + years;
}
}
      