function isPrime(number) {
    if (number <= 0) return false;
    if (number === 2) return true;

    for (i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}

console.log("Is prime 2: " + isPrime(2))
console.log("Is prime 3: " + isPrime(3))
console.log("Is prime 17: " + isPrime(17))
console.log("Is prime 18: " + isPrime(18))
console.log("Is prime 97: " + isPrime(97))
console.log("Is prime 100: " + isPrime(100))