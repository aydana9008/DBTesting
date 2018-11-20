
public interface ITelephone {

	// Interfaces can have only abstract methods
	// Interfaces should be public

	// Abstract methods have no body

	public void powerOn();

	public void dial(int phoneNumber);

	public void answer();

	public boolean callPhone(int phoneNumber);

	public boolean isRinging();

}
