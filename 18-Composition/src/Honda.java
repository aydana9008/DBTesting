
public class Honda extends Car {

	private Engine engine; // Engine class name has reference data type - HAS-A relationship

	public Honda(String color, int maxSpeed, Engine engine) {
		super(color, maxSpeed);
		this.engine = engine;
	}

	public void startHonda() {
		engine.start();

	}
}
