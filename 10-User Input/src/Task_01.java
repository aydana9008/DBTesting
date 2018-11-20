/*
• Read 10 numbers from the console entered by the user and print the sum of those numbers.
• Create a Scanner
• Use the hasNextInt() method from the scanner to check if the user has entered an int value.
• If hasNextInt() returns false, print the message Invalid Number. Continue reading until you have read 10 numbers.
• Use the nextInt() method to get the number and add it to the sum.
• Before the user enters each number, print the message "Enter number #x:" where x represents the count,
i.e. 1, 2, 3, 4, etc.
• For example, the first message printed to the user would be "Enter number #1:", the next "Enter number #2: ", and so on.
Hint:
• Useawhileloop.
• Use a counter variable for counting valid numbers.
• Closethescannerafteryoudon'tneeditanymore.
*/

import java.util.Scanner;

public class Task_01 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int sum = 0;
		int counter = 1;

		while (counter < 11) {

			System.out.println("Enter a number " + counter + ":");
			boolean bool = sc.hasNextInt();  // checking entered value if it is integer
			if (bool) {

				counter++;
				int number = sc.nextInt();
				sum += number;

			} else {
				System.out.println("Invalid number");
			}
			sc.nextLine(); // to
		}
		System.out.println("Sum : " + sum);
		sc.close();
	}
}
