
public class ForEachClass {

	public static void main(String[] args) {

		int[] marks = { 125, 132, 95, 116, 110 };
		
		int highest_mark = maximum(marks);
		System.out.println(highest_mark);

	}

	public static int maximum(int[] array) {

		int max = array[0];

		for (int num : array) { // for each loop
			if (num > max) {
				max = num;
			}
		}
		return max;

	}

}
