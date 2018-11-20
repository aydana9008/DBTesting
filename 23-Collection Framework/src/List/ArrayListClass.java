package List;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

// ArrayList increase capacity 100%;

public class ArrayListClass {

	public static void main(String[] args) {

		List<Integer> values = new ArrayList<Integer>();
		values.add(5);
		values.add(10);
		values.add(1, 9); // 1 index number, 9 value
		values.add(2);

		Collections.sort(values); // sort() methode sorts the elements in ArrayList

		System.out.println(values);

		for (int i : values) {  // prints each element
			System.out.println(i);
		}

	}

}
