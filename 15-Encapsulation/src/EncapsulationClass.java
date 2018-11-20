
public class EncapsulationClass {

	public static void main(String[] args) {

		Car porsche = new Car();

		porsche.setModel("Porche911");
		// porsche.setModel("Cayenne");  // Result is invalid while model is restricted with model 911 
		System.out.println(porsche.getModel());
		
		TaskBankAccount mikeAccount = new TaskBankAccount();
		mikeAccount.setAccountNumber("555555");
		mikeAccount.setAccountBalance(2.5);
		mikeAccount.setCustomerName("Mike");
		
		mikeAccount.withdrawal(100.0);
		mikeAccount.deposit(150.0);
		mikeAccount.withdrawal(50.0);
		
		System.out.println(mikeAccount.getCustomerName());
		
	}

}
