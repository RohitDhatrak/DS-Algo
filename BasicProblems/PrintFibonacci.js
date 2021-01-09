// Print the first n Fibonacci Numbers

// we shift a and b with each iteration and keep printing a.
// 0  1  1  2  3  5  8
// a  b
//    a  b
//       a  b

// Time Complexity  O(n)
// Space Complexity O(1)

function printFibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a + " ");
        let nextNum = a + b;
        a = b;
        b = nextNum;
    }
}
