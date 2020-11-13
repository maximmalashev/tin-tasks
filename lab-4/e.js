function longestWord(string) {
    preparedString = string.replace(/[^0-9a-z\-\s]/gi, '');
    words = preparedString.split(' ');

    longest = words[0];

    words.forEach(e => { if (e.length > longest.length) longest = e });

    return longest;
}

console.log("Longest word of 'asdfsdfdfsdf sdflksj-sdfsdfdskfksd dfdfd': " + longestWord('asdfsdfdfsdf sdflksj-sdfsdfdskfksd dfdfd'))