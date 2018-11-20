
public class UnaryOperators {

	public static void main(String[] args) {
		
		int i1= +10;
		int i2 = 10;
		int i3 = -100;
		int i4 = -(i1+i2);
		
		System.out.println(i1+ "| " + i2 + "|" +i3 + "|"+i4);
		
		
		// Increment Operator
		
		int i=10;
		int j=5;
		i++;
		--j;
		System.out.println(i + "|" + j);
		
		int res = i++ + --j;
		System.out.println(res+"|"+i+"|"+j);
		
		boolean flag = true;
		System.out.println(!flag);
		System.out.println(!!flag);
		
		

	}

}
