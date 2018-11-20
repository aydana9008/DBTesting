import java.util.Arrays;

public class ReferenceClass {

	public static void main(String[] args) {
		
		int myIntValue = 10;
		int anotherIntValue = myIntValue;
		
		System.out.println("myIntValue: " + myIntValue);
		System.out.println("anotherIntValue: " + anotherIntValue);
		
		anotherIntValue=anotherIntValue+1;
		System.out.println("myIntValue: " + myIntValue);
		System.out.println("anotherIntValue: " + anotherIntValue);
		
		System.out.println("-----------------------------------------");
		
		int[] myIntArray = new int[5];
		int[] anotherIntArray = myIntArray;
		
		System.out.println("myIntArray: " + Arrays.toString(myIntArray));
		System.out.println("anotherIntArray : " + Arrays.toString(anotherIntArray));
		
		anotherIntArray[0] = 1;
		myIntArray[1] = 2;
		
		System.out.println("myIntArray: " + Arrays.toString(myIntArray));
		System.out.println("anotherIntArray : " + Arrays.toString(anotherIntArray));

	}

}
