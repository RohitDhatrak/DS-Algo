// 904. Fruit Into Baskets

// Time Complexity  O(n)
// Space Complexity O(1)

public int totalFruit(int[] fruits) {
    int startPoint = 0;
    int endPoint = 0;
    HashMap<Integer, Integer> fruitBucket = new HashMap<>();
    int currentCount = 0;
    int maxCount = 0;

    while (startPoint < fruits.length && endPoint < fruits.length) {
        int fruit = fruits[endPoint];
        if (fruitBucket.containsKey(fruit)) {
            fruitBucket.put(fruit, fruitBucket.get(fruit) + 1);
            endPoint++;
            currentCount++;
        } else if (fruitBucket.size() < 2) {
            fruitBucket.put(fruit, 1);
            endPoint++;
            currentCount++;
        } else {
            int fruitToBeRemoved = fruits[startPoint];
            int count = fruitBucket.get(fruitToBeRemoved);

            if (count == 1) {
                fruitBucket.remove(fruitToBeRemoved);
            } else {
                fruitBucket.put(fruitToBeRemoved, count - 1);
            }
            currentCount--;
            startPoint++;
        }

        maxCount = Math.max(currentCount, maxCount);
    }

    return maxCount; 
}
