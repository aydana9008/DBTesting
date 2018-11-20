
public class Main {

	public static void main(String[] args) {

		// POLYMORPHISM : One object can have different forms.
		
		Dog d1 = new Dog();
		d1.speak();

		Cat c1 = new Cat();
		c1.speak();

		Bird b1 = new Bird();
		b1.speak();
		
		
		// If you have a relation between parent, 
		Animal a1 = new Dog();
		a1.speak();
		
		Animal a2 = new Cat();
		a2.speak();
		
		Animal a3 = new Cat();
		a3.speak();
		
		// Polymorphism
		
		Animal a = new Dog();
		a.speak();

		a = new Cat();
		a.speak();
		
		a = new Bird();
		a.speak();
		
		
		
	}

}
