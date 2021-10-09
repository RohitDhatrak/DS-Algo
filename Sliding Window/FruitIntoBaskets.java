// 904. Fruit Into Baskets

// Time Complexity  O(n)
// Space Complexity O(1)

public int totalFruit(int[] fruits) {
    int maxFruits = 0;
    int lastFruit = 0;
    int startPoint = 0;
    int count = 0;
    int[] types = {fruits[0], fruits[0]};

    while (startPoint < fruits.length) {
        int currentFruit = fruits[startPoint];
        if (currentFruit == types[0] || currentFruit == types[1]) {
            count++;
            startPoint++;
        } else if (types[0] == types[1]) {
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
}
