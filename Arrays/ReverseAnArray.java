import java.util.Scanner;

public class ReverseAnArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < arr.length; i++)
            arr[i] = scanner.nextInt();

        // Method 1 - Iterative Method  O(n)

        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        // recursiveFuction(arr,0,arr.length-1);

        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i]+" ");
    }

    
    // Method 2 - Using a Recursive Fuction  O(n)
    public static void recursiveFuction(int arr[], int i, int j) {
        
        if (i>=j)
            return;

        recursiveFuction(arr, i + 1, j - 1);
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}