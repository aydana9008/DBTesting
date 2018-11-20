// TreeSet
// 1. Insertion order is preserved
// 2. Duplicates are NOT allowed
// 3. There is Ascending order

package Set;

import java.util.TreeSet;
import java.util.Set;

public class TreeSetClass {

	public static void main(String[] args) {

		Set<Integer> values = new TreeSet<Integer>();

		values.add(15);
		values.add(19);
		values.add(6);

		values.add(6);
		values.add(8);
		values.add(88);

		for (int i : values) {

			System.out.println(i);
		}
	}
}
