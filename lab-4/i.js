function amountToCoins(amount, coins) {
    result = [];

    coins.forEach(coin => {
        while (amount >= coin) {

            result.push(coin);
            amount -= coin;
        }
    });

    return result;
}

console.log("Amount: 46, coins: [25, 10, 5, 2, 1]: " + amountToCoins(46, [25, 10, 5, 2, 1]));