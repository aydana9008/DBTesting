
public class CalculateSum {

	public static void main(String[] args) {
		
		calculateSum(4, 5);
		System.out.println(calculateSum2(5, 10));

	}

	public static void calculateSum(int a, int b) {

		int sum = a + b;
		System.out.println(sum);
	}

	public static int calculateSum2(int x, int y) {

		int sum = x + y;
		return sum;
	}
	
}
