/*
* 
* *
* * * 
* * * *
* * * * *
*/

function pattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*" + " ");
        }
        console.log();
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

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("*" + " ");
        }
        console.log();
    }
}

/*
    *
   **
  ***
 ****
*****
*/

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= n - i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

/*
    * 
   * *
  * * *
 * * * *
* * * * *
*/

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= n - i; j++) {
            process.stdout.write("*" + " ");      // just add space in the above program
        }
        console.log();
    }
}

/*
*****
 ****
  ***
   **
    *
*/

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

/*
* * * * * 
 * * * *  
  * * *   
   * *    
    * 
*/

function pattern(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write("*" + " ");       // just add space in the above program
        }
        console.log();
    }
}
