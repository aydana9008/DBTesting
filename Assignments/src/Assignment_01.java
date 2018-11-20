
public class Assignment_01 {

	public static void main(String[] args) {
		/*
		 * Write a JAVA program to calculate the tax:
		 * 
		 * income ≤ 150,000,000 tax ratio %25 income ≤ 300,000,000 tax ratio %30 income
		 * ≤ 600,000,000 tax ratio %35 income ≤ 1,200,000,000 tax ratio %40 income >
		 * 1,200,000,000 tax ratio %50
		 * 
		 * Create needed variables and print the tax
		 */

		double income = 30000;
		double tax = 0;

		if (income <= 150000) {
			tax = income * 0.25;
			System.out.println("Tax is $ " + tax);
		} else if (income > 150000 && income <= 300000) {
			tax = income * 0.30;
			System.out.println("Tax is $ " + tax);
		} else if (income > 300000 && income <= 600000) {
			tax = income * 35;
			System.out.println("Tax is $ " + tax);
		} else if (income > 600000 && income <= 1200000) {
			tax = income * 0.40;
			System.out.println("Tax is $ " + tax);
		} else if (income > 1200000) {
			tax = income * 0.50;
			System.out.println("Tax is $ " + tax);
		}
	}
}
