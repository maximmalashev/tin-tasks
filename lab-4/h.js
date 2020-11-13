function lowest2greatest2(numbers) {
    sorted = numbers.sort();

    return "Second lowest: " + sorted[1] + ", second highest: " + sorted[numbers.length - 2];
}

console.log("Second lowest & second greatest of [1, 5, 3, 5, 7, 3, 2, 5, 3]" + lowest2greatest2([1, 5, 3, 5, 7, 3, 2, 5, 3]));