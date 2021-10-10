// 904. Fruit Into Baskets

// Time Complexity  O(n)
// Space Complexity O(1)

var totalFruit = function (fruits) {
    let startPoint = 0;
    let endPoint = 0;
    let fruitBucket = new Map();
    let currentCount = 0;
    let maxCount = 0;

    while (startPoint < fruits.length && endPoint < fruits.length) {
        const fruit = fruits[endPoint];
        if (fruitBucket.has(fruit)) {
            fruitBucket.set(fruit, fruitBucket.get(fruit) + 1);
            endPoint++;
            currentCount++;
        } else if (fruitBucket.size < 2) {
            fruitBucket.set(fruit, 1);
            endPoint++;
            currentCount++;
        } else {
            const fruitToBeRemoved = fruits[startPoint];
            const count = fruitBucket.get(fruitToBeRemoved);

            if (count === 1) {
                fruitBucket.delete(fruitToBeRemoved);
            } else {
                fruitBucket.set(fruitToBeRemoved, count - 1);
            }
            currentCount--;
            startPoint++;
        }

        maxCount = Math.max(currentCount, maxCount);
    }

    return maxCount;
};
