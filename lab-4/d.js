function toAlfabeticalOrder(string) {
    string_a = string.split('')

    /* Insertion sort */
    for (i = 1; i < string_a.length; i++) {
        if (string_a[i].toLowerCase() < string_a[i - 1].toLowerCase()) {
            for (j = 0; j < i; j++) {
                if (string_a[i].toLowerCase() < string_a[j].toLowerCase()) {
                    moving = string_a[i];

                    for (k = i - 1; k >= j; k--) {
                        string_a[k + 1] = string_a[k]
                    }

                    string_a[j] = moving;
                }
            }
        }
    }

    return string_a.join().replace(/,/g, '');
}

console.log("alfabetical order 'WeBmAsTeR': " + toAlfabeticalOrder("WeBmAsTeR"))