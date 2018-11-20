
public class StaticMethods {

	public static void main(String[] args) {

		Abc.show1(); // static methods can be called by class.method name
		Abc.show4();

		Abc x = new Abc();
		x.show2();
		x.show3();
		
		Math.round(45.5);
	}
}


// Not a good best practice to add class here
class Abc {

	public static void show1() {
		System.out.println("hi1");
		// show2(); // static method can not call instance method
		show4();
	}

	public void show2() {
		System.out.println("hi2");
		show1(); // instance method can call static method
	}

	public void show3() {
		System.out.println("hi3");
		show2();
		show1(); // static method can be called from instance
	}

	public static void show4() {
		System.out.println("hi4");
	}
}
