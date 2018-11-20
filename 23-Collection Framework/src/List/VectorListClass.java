package List;

import java.util.Vector;

public class VectorListClass {

	public static void main(String[] args) {
		
		Vector<Integer> v = new Vector<Integer>();
		
		// Vector has an initial size of 10; and the increase capacity 100%
		// Vector is slow - not good to use
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);
		v.add(1);

		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);
		v.add(2);

		v.add(2);
		v.add(2);
		
		System.out.println(v.capacity()); 
		
	}

}
