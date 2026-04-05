package Assignment_7;
import java.util.Scanner;
import static java.lang.System.out;

class ArrayAccessor {
    private int[] arr;

    public ArrayAccessor(int a, int b, int c) {
        this.arr = new int[]{a, b, c};
    }

    public int getElement(int index) {
        try {
            return arr[index];
        } catch (ArrayIndexOutOfBoundsException e) {
            out.println("Error: Index " + index + " is out of bounds for array of size 3.");
            return -1;
        }
    }
}

public class Assignment_7b {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        out.print("Enter 3 array elements: ");
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        out.print("Enter index to access: ");
        int index = sc.nextInt();
        ArrayAccessor arr = new ArrayAccessor(a, b, c);
        out.println("Value at index " + index + ": " + arr.getElement(index));
        sc.close();
    }
}
