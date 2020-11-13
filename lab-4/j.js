function binarySearch(number, array) {
    sorted = array.sort();

    head = 0;
    tail = sorted.length;
    do {
        /* Find middle element */
        middleIndex = head + Math.floor((tail - head) / 2);
        middle = sorted[middleIndex];

        /* Change current array boundaries accordingly */
        if (middle === number) return true;
        else if (middle > number) tail = middleIndex;
        else if (middle < number) head = middleIndex + 1;
    } while (tail - head > 0)

    return false;
}

console.log("Binary search for 1 in [1, 5, 3, 5, 7, 3, 2, 5, 3]: " + binarySearch(1, [1, 5, 3, 5, 7, 3, 2, 5, 3]));
console.log("Binary search for 4 in [1, 5, 3, 5, 7, 3, 2, 5, 3]: " + binarySearch(4, [1, 5, 3, 5, 7, 3, 2, 5, 3]));
console.log("Binary search for 7 in [1, 5, 3, 5, 7, 3, 2, 5, 3]: " + binarySearch(7, [1, 5, 3, 5, 7, 3, 2, 5, 3]));