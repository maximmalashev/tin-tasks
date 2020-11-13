function palindrome(string) {
    string_a = string
        .replace(/\s/g, '')
        .toLowerCase()
        .split('');

    for (i = 0; i < string_a.length / 2; i++) {
        if (string_a[i] != string_a[string_a.length - 1 - i]) return false;
    }

    return true;
}

console.log("palindrome 'ABBA': " + palindrome("ABBA"))
console.log("palindrome 'hello': " + palindrome("hello"))
console.log("palindrome 'Able was I ere I saw Elba': " + palindrome("Able was I ere I saw Elba"))