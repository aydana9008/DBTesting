package computer;

public class Main {

	public static void main(String[] args) {

		Dimensions theDimension = new Dimensions(20, 20, 5); // belongs to case
		Case theCase = new Case("2208", "Dell", "240", theDimension);
		Motherboard theMotherboard = new Motherboard("BJ-200", "Asus", 4, 6, "v2.44");
		Monitor theMonitor = new Monitor("27inch beast", "Acer", 27, new Resolution(2540, 1440));

		PC thePC = new PC(theCase, theMonitor, theMotherboard);

		thePC.getTheMonitor().drawPixelAt(1500, 1200, "red");

		thePC.getTheMotherboard().loadProgram("Windows 10.0");
		
		thePC.getTheCase().pressPowerButton();

	}

}
