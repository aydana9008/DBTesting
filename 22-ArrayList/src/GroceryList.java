import java.util.ArrayList;
import java.util.List;

// import java.util.* // This way can be used to import all from util library

public class GroceryList {

	// Creating an arrayList - we can declare String type
	List<String> groceryList = new ArrayList<String>();

	// arrayList can be created in other data type
	List groceryList2 = new ArrayList();
	List<Integer> groceryList3 = new ArrayList<Integer>(); // write not only int - Integer

	// Adding item to collection
	public void addGroceryItem(String item) {
		groceryList.add(item); // add() is used to push item to arrayList
	}

	// Print items from arrayList collection
	public void printGroceryList() {
		System.out.println("You have " + groceryList.size() + " items in your grocery list");

		for (int i = 0; i < groceryList.size(); i++) {
			System.out.println((i + 1) + "." + groceryList.get(i)); // we use get() to get items from arrayList
		}

	}

	// Modifying an item in arrayList
	public void modifyGroceryItem(int position, String newItem) {
		groceryList.set(position, newItem); // set() is used to set a new item to a given position in arrayList
	}

	// Removing an item from arrayList
	public void removeGroceryItem(int position) {
		groceryList.remove(position); // remove() removes the item from arrayList by given index
	}

	public String findItem(String searchItem) {
		// boolean exists = groceryList.contains(searchItem); // contains() returns true/false

		int position = groceryList.indexOf(searchItem); // indexOf() returns the index number of item in arrayList
		if (position >= 0) {
			return groceryList.get(position);
		}

		return null; // else, if there is no item return null

	}

}
