function cal()
{
	var height=document.getElementById("height").value;
	var weight=document.getElementById("weight").value;
	if(height==="" && weight==="")
	{
		alert("enter some values");
	}
	else{
	var ans=(weight/(height*height));
	var bmi=ans*10000;
	alert(`Your bmi is ${bmi.toFixed(2)}\nBMI Categories:\nUnderweight<=18.5\nNormal weight = 18.5 to 24.9\nOverweight = 25 to 29.9\nObesity = BMI of 30 or greater`);
    }
	

}