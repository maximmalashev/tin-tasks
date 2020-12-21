calculateFahrenheit = function() {
    var celsius = document.getElementById("celsius-input").value;
    var fahrenheit = celsius * (9 / 5) + 32;

    document.getElementById("fahrenheit-label").textContent = fahrenheit + "F";
}