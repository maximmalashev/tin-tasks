function getType(variable) {
    return typeof variable;
}

console.log("Type of 2: " + getType(2))
console.log("Type of 'hello': " + getType('hello'))
console.log("Type of 'getType': " + getType(getType))