// print the prime factors of a number
// eg  n = 1440  >> 2 2 2 2 2 3 3 5

function primeFactors(n) {
    while (n != 1) {
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                console.log(i + " ");
                n = Math.floor(n / i);
                break;
            }
            if (i == Math.floor(Math.sqrt(n))) {
                // if we reach √n and still haven't found a factor then the number is prime
                console.log(n + " ");
                n = Math.floor(n / n);
            }
        }
    }
}
