function fibonacci(n) {
    result = 1;
    previous = 1;

    for (i = 2; i < n; i++) {
        tmp = result;
        result += previous;
        previous = tmp;
    }

    return result;
}

console.log("1st fibonacci: " + fibonacci(1))
console.log("2nd fibonacci: " + fibonacci(2))
console.log("10th fibonacci: " + fibonacci(10))