
public class Dog2 {

	public String name;
	public int age;
	public String breed;
	public String color;

	public Dog2() {
		
		System.out.println("I am running constructor");
		name = "Hunter";
		age = 15;
		breed = "Bulldog";
		color = "Brown";

	}

	public Dog2(String name, int age, String breed, String color) {
		this();
		this.name = name;
		this.age = age;
		this.breed = breed;
		this.color = color;
	}

	public void bark() {
		System.out.println(name + " is barking");
	}

	public void eat() {
		System.out.println(name + " is eating");
	}

	public void wagTail() {
		System.out.println(name + " is wagging tail");
	}
}
