// LinkedList does not shift the items when we add to the list
// When we add an item it has a note; P (previous) and N (next)

package List;

import java.util.LinkedList;

public class LinkedListClass {

	public static void main(String[] args) {

		LinkedList<String> object = new LinkedList<String>();

		object.add("A");
		object.add("B");
		object.addLast("C"); // adds C as last element
		object.addFirst("D"); // adds D as first element
		object.add(2, "E"); // adds F to 2nd index
		object.add("F");
		object.add("G");

		System.out.println(object);

		object.remove("B");
		object.remove(3); // removes element which has 3th index number
		object.removeFirst(); // removes first element
		object.removeLast(); // removes last element

		System.out.println(object);

		int size = object.size();
		System.out.println(size);
	}

}
