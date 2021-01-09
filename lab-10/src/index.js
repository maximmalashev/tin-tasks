const temperature = require('./temperature');
const distance = require('./distance');

const tempIpt = document.getElementById('tempIpt');
const tempSelect = document.getElementById('tempSelect');

const cResult = document.getElementById('cResult');
const fResult = document.getElementById('fResult');
const kResult = document.getElementById('kResult');

const distIpt = document.getElementById('distIpt');
const distSelect = document.getElementById('distSelect');

const kmResult = document.getElementById('kmResult');
const miResult = document.getElementById('miResult');

window.calculateTemperature = () => {
    if (tempIpt.value === '') return;

    var result = temperature.convert(tempIpt.value, tempSelect.value);

    var c, f, k;

    if (tempSelect.value === 'C') {
        c = tempIpt.value;
        f = result.F;
        k = result.K;
    }

    else if (tempSelect.value === 'F') {
        c = result.C;
        f = tempIpt.value;
        k = result.K;
    }
    else if (tempSelect.value === 'K') {
        c = result.C;
        f = result.F;
        k = tempIpt.value;
    }

    cResult.innerHTML = 'Celcius: ' + c;
    fResult.innerHTML = 'Fahrenheit: ' + f;
    kResult.innerHTML = 'Kelvin: ' + k;
}

window.calculateDistance = () => {
    if (distIpt.value === '') return;

    if (distSelect.value === 'km') {
        kmResult.innerHTML = 'Kilometers: ' + distIpt.value;
        miResult.innerHTML = 'Miles: ' + distance.convertKmToMi(distIpt.value);
    }
    else if (distSelect.value === 'mi') {
        kmResult.innerHTML = 'Kilometers: ' + distance.convertMiToKm(distIpt.value);
        miResult.innerHTML = 'Miles: ' + distIpt.value;
    }
}