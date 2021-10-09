// 904. Fruit Into Baskets

// Time Complexity  O(n)
// Space Complexity O(1)

var totalFruit = function (fruits) {
    let maxFruits = 0;
    let lastFruit = 0;
    let startPoint = 0;
    let count = 0;
    let types = [fruits[0], fruits[0]];

    while (startPoint < fruits.length) {
        let currentFruit = fruits[startPoint];
        if (currentFruit === types[0] || currentFruit === types[1]) {
            count++;
            startPoint++;
        } else if (types[0] === types[1]) {
            types[1] = currentFruit;
            lastFruit = startPoint;
            count++;
            startPoint++;
        } else {
            startPoint = lastFruit;
            types[0] = types[1];
            count = 0;
        }
        maxFruits = Math.max(maxFruits, count);
    }

    return maxFruits;
};
