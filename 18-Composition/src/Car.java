
public class Car {
	
	private String color;
	private int maxSpeed;
	
	public void carInfo() {
		System.out.println("car color: " + color + " car maxspeed: " + maxSpeed);
		
	}
	
	public Car(String color, int maxSpeed) {
		this.color = color;
		this.maxSpeed = maxSpeed;
	}

	public String getColor() {
		return color;
	}

	public int getMaxSpeed() {
		return maxSpeed;
	}
	
	

}
