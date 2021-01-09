export const convert = (value, unit) => {
    value = parseFloat(value);

    if (unit === 'C') {
        var k = value + 273.15;
        var f = (value * 1.8) + 32;

        return {K: k, F: f};
    } 
    else if (unit === 'F') {
        var c = (value - 32) / 1.8;
        var k = c + 273.15;

        return {C: c, K: k};
    }
    else if (unit === 'K') {
        var c = value - 273.15;
        var f = (c * 1.8) + 32;

        return {C: c, F: f};
    }
}