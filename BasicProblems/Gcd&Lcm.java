// Calculate GCD and LCM of a and b

// Time Complexity  O(log(min(m,n)))
// Space Complexity O(1)


// Eulclids Algorithm for GCD

// a )▔▔
//     b
//    ▔▔
//    b % a)▔▔      ie the remainder (b%a) will  be the new a
//            a       and a will be the new b
//           ▔▔
//              .......


public static int gcd(int a, int b) {
    if(a== 0)
        return b;
    return gcd(b % a, a);
}

// a * b = GCD * LCM   >> so LCM can be found after finding GCD
