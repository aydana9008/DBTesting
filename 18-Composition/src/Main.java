
public class Main {

	public static void main(String[] args) {

		Engine e1 = new Engine();

		Honda h1 = new Honda("Red", 200, new Engine());
		// Honda h1 = new Honda("Red", 200, e1); // second way to give parameter

		h1.carInfo();
		h1.startHonda();

	}

}
