import java.util.Scanner;

public class UserInput {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);  // scanner object is created from Scanner package 

		
		System.out.println("Enter a byte value: ");
		Byte b1 = scanner.nextByte();

		System.out.println("Enter a shor value:");
		short s1 = scanner.nextShort();

		System.out.println("Enter a int value: ");
		int i1 = scanner.nextInt();

		System.out.println("Enter a boolean value: ");
		boolean bool = scanner.nextBoolean();

		System.out.println("b1: " + b1 + ", s1: " + s1 + ", i1: " + i1 + ",boolean: " + bool);
		
		
		scanner.nextLine();  // After int value, if string should be be used, scanner.nextLine should be used. 
		
		System.out.println("Enter your name: ");
		String str = scanner.nextLine();
		System.out.println(str);
		
		scanner.close(); // When there is no need to scanner this object, it should be closed.
	}

}
