// print the prime factors of a number
// eg  n = 1440  >> 2 2 2 2 2 3 3 5

public static void primeFactors(int n) {
    while (n != 1) {
        for (int i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i == 0) {
                System.out.print(i + " ");
                n /= i;
                break;
            }
            if (i == Math.floor(Math.sqrt(n))) {    // if we reach √n and still haven't found a factor then the number is prime
                System.out.print(n + " ");
                n /= n;
            }
        }
    }
}
