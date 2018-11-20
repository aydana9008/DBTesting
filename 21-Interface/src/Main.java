
public class Main {

	public static void main(String[] args) {

		// DeskPhone mikePhone = new DeskPhone(20220202, true);

		// ITelephone is parent
		ITelephone mikePhone = new DeskPhone(20220220, true);
		mikePhone.powerOn();
		mikePhone.callPhone(20220220);
		mikePhone.answer();

	}

}
