
public class SwitchClass {

	public static void main(String[] args) {

		int switchValue = 3;
		switch (switchValue) {
		case 1:
			System.out.println("value was 1");
			break;
		case 2:
			System.out.println("value was 2");
			break;
		case 3:
		case 4:
		case 5:
			System.out.println("value was 3, or 4, or 5");
			break;
		default:
			System.out.println("was not correct value");
			break;
		}

	}

}
