
public class Task_01 {

	public static void main(String[] args) {

		char charValue = 'A';
		switch (charValue) {
		case 'A':
		case 'B':
		case 'C':
		case 'D':
		case 'E':
			System.out.println(charValue + " was found");
			break;
		default:
			System.out.println("It was not found!");
			break;
		}

	}

}
