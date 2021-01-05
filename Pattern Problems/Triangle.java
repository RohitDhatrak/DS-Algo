/*
* 
* *
* * * 
* * * *
* * * * *
*/

public static void triangle(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            System.out.print("*" + " ");
        }
        System.out.println();
    }
}

/*
* * * * * * * 
* * * * * *   
* * * * *     
* * * *       
* * *
* *
*
*/

public static void pattern(int n) {
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < i; j++) {
            System.out.print("*" + " ");
        }
        System.out.println();
    }
}

/*
    *
   **
  ***
 ****
*****
*/

public static void pattern(int n) {
    for (int i = 5; i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            System.out.print(" ");
        }
        for (int j = 0; j <= 5 - i; j++) {
            System.out.print("*");
        }
        System.out.println();
    }
}

/*
*****
 ****
  ***
   **
    *
*/

public static void pattern(int n) {
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < n - i; j++) {
            System.out.print(" ");
        }
        for (int j = 0; j < i; j++) {
            System.out.print("*");
        }
        System.out.println();
    }
}

/*
* * * * * 
 * * * *  
  * * *   
   * *    
    * 
*/

public static void pattern(int n) {
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < n - i; j++) {
            System.out.print(" ");
        }
        for (int j = 0; j < i; j++) {
            System.out.print("*" + " ");
        }
        System.out.println();
    }
}
