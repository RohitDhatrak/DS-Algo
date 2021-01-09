// Check if the number is prime or composite

// We won't find any new factors for 36 after the square root of the number
// 1 * 36   |  36 * 1
// 2 * 18   |  18 * 2
// 3 * 12   |  12 * 3
// 4 * 9    |   9 * 4
// 6 * 6    |   6 * 6

// Time Complexity  O(√n)
// Space Complexity O(1)

function checkPrime(n) {
    if (n < 0) return "Invalid Input";
    if (n < 2) return "It's neither prime nor composite";
    if (n == 2) return "It's a prime number";
    for (let i = 2; i * i <= n; i++)
        if (n % i == 0) return "It's a composite number";
    return "It's a prime number";
}
