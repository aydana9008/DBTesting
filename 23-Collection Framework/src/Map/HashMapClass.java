// HashMap
// 1. No order
// 2. There is no index number, there is key and value;
// 3. HashMap : fast, unsynchronized, works with single thread, allows one null key
// HashTable : Slow, synchronized, works with multiple thread, does not allow null key
// LinkedhashMap - preserves the insertion order

package Map;

import java.util.*;

public class HashMapClass {

	public static void main(String[] args) {

		// Map map = new HashMap();

		Map<String, String> map = new HashMap<>();

		map.put("myName", "Mike"); // Adds item to map object
		map.put("myJob", "SDET"); //
		map.put("myAge", "25"); //
		map.put("x", "y"); //

		System.out.println(map);

		System.out.println(map.get("myName")); // Gets item from map object
		System.out.println(map.get("myName2"));

		Set<String> keys = map.keySet(); // keySet() collects all the keys

		for (String key : keys) {

			System.out.println(key + " " + map.get(key)); // get() we get key values.
		}

	}

}
