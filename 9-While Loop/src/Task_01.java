
public class Task_01 {

	public static void main(String[] args) {

		System.out.println(sumDigits(125));
		System.out.println(sumDigits(-125));
		System.out.println(sumDigits(32125));

	}
	
	public static int sumDigits(int number) {

		int sum = 0;

		if (number < 10) {
			return -1;
		}

		while (number > 0) {
			int digit = number % 10;
			sum += digit;
			number = number / 10;
		}
		return sum;
	}
}
