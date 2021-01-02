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

public static void triangle(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i % 2 == 0 && j % 2 != 0)
                System.out.print(" " + "#");
            if (i % 2 != 0 && j % 2 == 0)
                System.out.print("#" + " ");
        }
        System.out.println();
    }
}
