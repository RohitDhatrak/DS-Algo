// 904. Fruit Into Baskets

// Time Complexity  O(n)
// Space Complexity O(1)

var totalFruit = function(fruits) {
    let maxFruits = 0;
    let slowPtr = 0;
    let fastPtr = 0;
    let count = 0;
    let types = [fruits[0], fruits[0]];

    while (fastPtr < fruits.length) {
        let currentFruit = fruits[fastPtr];
        if (currentFruit === types[0] || currentFruit === types[1]) {
            count++;
            fastPtr++;
        } else if (types[0] === types[1]) {
            types[1] = currentFruit;
            slowPtr = fastPtr;
            count++;
            fastPtr++;
        } else {
            fastPtr = slowPtr;
            types[0] = types[1];
            count = 0;
        }
        maxFruits = Math.max(maxFruits, count);
    }

    return maxFruits;
};
