/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

function chessboard(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i % 2 == 0 && j % 2 != 0) 
                process.stdout.write(" " + "#");
            if (i % 2 != 0 && j % 2 == 0) 
                process.stdout.write("#" + " ");
        }
        console.log();
    }
}
