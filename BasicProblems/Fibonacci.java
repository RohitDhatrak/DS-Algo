// Print the first n Fibonacci Numbers

// we shift a and b with each iteration and keep printing a.
// 0  1  1  2  3  5  8
// a  b
//    a  b
//       a  b

public static void printFibonacci(int n) {
    int a = 0;
    int b = 1;
    for (int i = 0; i < n; i++) {
        System.out.print(a + " ");
        int nextNum = a + b;
        a = b;
        b = nextNum;
    }
}
