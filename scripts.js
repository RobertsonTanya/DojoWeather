function alertCity(name) {
    alert(name.innerText);
}
function acceptCookies(){
    document.getElementById("cookies").remove();
}
function convertTempsToF(celsius){
    var fahrenheit = ((celsius*9)/5)+32;
    return fahrenheit;
}
function convertTempsToC(fahrenheit){
    var celsius = ((fahrenheit-32)*5)/9;
    return celsius;
}
function changeTextAndTemps(elem, tempText) {
    var high = tempText.innerText.substring(0,2);

    if(elem.value == 'fahrenheit'){
        var newTemp =  Math.round(convertTempsToF(high),1);
        tempText.innerText = newTemp + '°';
    } else if(elem.value == 'celsius'){
        var newTemp =  Math.round(convertTempsToC(high),1);
        tempText.innerText = newTemp + '°';
    }
}
function changeGauge(elem) {
    var todaysHighText = document.getElementById('high-today');
    var todaysLowText = document.getElementById('low-today');
    var tomorrowsHighText = document.getElementById('high-tomorrow');
    var tomorrowsLowText = document.getElementById('low-tomorrow');
    var fridaysHighText = document.getElementById('high-friday');
    var fridaysLowText = document.getElementById('low-friday');
    var saturdaysHighText = document.getElementById('high-saturday');
    var saturdaysLowText = document.getElementById('low-saturday');

    changeTextAndTemps(elem, todaysHighText);
    changeTextAndTemps(elem, todaysLowText);
    changeTextAndTemps(elem, tomorrowsHighText);
    changeTextAndTemps(elem, tomorrowsLowText);
    changeTextAndTemps(elem, fridaysHighText);
    changeTextAndTemps(elem, fridaysLowText);
    changeTextAndTemps(elem, saturdaysHighText);
    changeTextAndTemps(elem, saturdaysLowText);
}
