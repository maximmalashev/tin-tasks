function factorial_i(number) {
    if (number === 0) return 1;
    
    result = 1;

    for (i = 1; i <= number; i++)
        result *= i;

    return result;
}

function factorial_r(number) {
    if (number === 0) return 1;

    if (number > 1)
        return number * factorial_r(number - 1);
    else return number;
}

console.log("factorial of 4 iterative: " + factorial_i(4)) 
console.log("factorial of 4 recursive: " + factorial_r(4)) 