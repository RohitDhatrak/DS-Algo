// 1. You are given n number of bulbs. They are all switched off. A weird fluctuation in voltage hits the circuit n times. 
//  In the 1st fluctuation all bulbs are toggled, in the 2nd fluctuation every 2nd bulb is toggled, in the 3rd fluctuation every 3rd bulb is toggled and so on. 
//  You've to find which bulbs will be switched on after n fluctuations.
// 2. Take as input a number n, representing the number of bulbs.
// 3. Print all the bulbs that will be on after the nth fluctuation in voltage.

public static void benjaminBulbs(int n) {
    for(int i = 1; i * i <= n; i++)
        System.out.println(i * i);
}

// All the bulbs having an odd no of factors remain on it the end
// Even prime numbers would be turned off because they have two factors 1 and the number itself
// 1 * 7   |  7 * 1

// All the perfect squares have odd no of factors
// 1 * 36   |  36 * 1
// 2 * 18   |  18 * 2
// 3 * 12   |  12 * 3
// 4 * 9    |   9 * 4
//        6 * 6          << this becomes the odd factor
