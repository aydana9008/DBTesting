// Queue
// 1. Is not preserved
// 2. FIFO, first in first out

package Queue;

import java.util.PriorityQueue;
import java.util.Queue;

public class QueueClass {

	public static void main(String[] args) {
		
		Queue<Integer> q = new PriorityQueue<Integer>();
		
		// Add elements
		for(int i=0; i<5; i++) {
			q.add(i);
		}
		
		System.out.println(q);
		
		// FIFO - First in first out
		
		int removedel = q.remove();
		System.out.println(removedel);  
		
		System.out.println(q); 

		System.out.println(q.peek()); // Shows the first item
		
		System.out.println(q.size()); // Shows the size of list
		
		

	}

}
