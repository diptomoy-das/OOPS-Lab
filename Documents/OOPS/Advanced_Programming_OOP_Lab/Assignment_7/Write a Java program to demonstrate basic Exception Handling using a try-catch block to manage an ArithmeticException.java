package Assignment_7;
import java.util.Scanner;
import static java.lang.System.out;

class Divider {
    private int num1, num2;

    public Divider(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public int divide() {
        try {
            return num1 / num2;
        } catch (ArithmeticException e) {
            out.println("Error: Division by zero is not allowed.");
            return 0;
        }
    }
}

public class Assignment_7a {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        out.print("Enter Dividend: ");
        int num1 = sc.nextInt();
        out.print("Enter Divisor: ");
        int num2 = sc.nextInt();
        Divider d = new Divider(num1, num2);
        out.println("Result: " + d.divide());
        sc.close();
    }
}