
public class ArithmeticOperators {

	public static void main(String[] args) {
		// 
		
		//int i1=12;
		int i2=5;
		float f1=15.5f;
		double d1=20.5;
		String msg = "Java";
		
		//int res1 = i1+i2;
		//float res2 = i1+f1;
		double res3 = i2+d1;
		String res4 = msg+f1;
		
		//System.out.println(res1);
		//System.out.println(res2);
		System.out.println(res3);
		System.out.println(res4);
		
		System.out.println("-----------------------------");
		
		// CASTING
		byte b1=12; // Implicit casting
		int i1=12;
		byte b2=20;
		
/*
 * The result of expression involving anything int-sized or  smaller variable is always an int. 
 * If you add two bytes together, you will get an int. 
 * And in case of arithmetic addition, multiplication, subtraction and division of
 * integral variables (bytes or short) compile processes the value as int, so you need to cast it.  
 * 
 */
		
		byte resByte = (byte) (b1+b2); // 
		byte resByte1 = 20+12; // casting is done by Java
		byte res7 = 126+1;
		byte res8 = (byte) (126+19);  // -111
		
		System.out.println(res8);	// -111	
		
		
		
	}
	
	

}
