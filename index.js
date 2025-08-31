const button = document.getElementById("btn-calc")

button.addEventListener('click',function(){
    let Fahrenheit = document.getElementById("fInput").value
    Celsius = (Fahrenheit-32) * 5 / 9;
    alert('Fahrenheit to Celsius is' + Celsius);
});
button.addEventListener('click',function(){
    let Celsius = document.getElementById("cInput").value
    Fahrenheit =  Celsius * 9/5 + 32;
    alert('Celsius to Fahrenheit is ' + Fahrenheit);
});
