/*
▪ Create a new class for a bank account.
▪ Create fields for the account number, balance, customer name, email and phone number. 
▪ Create getters and setters for each field.
▪ Create two additional methods:
▪ To allow the customer to deposit funds(this should increment the balance field)
▪ To allow the customer to withdraw funds. This should deduct from the balance field, 
but not allow the withdrawal to complete if there are insufficient funds.
 */

public class TaskBankAccount {

	private String accountNumber;
	private double accountBalance;
	private String customerName;
	private String customerEmailAddress;
	private String customerPhoneNumber;

	public void deposit(double depositAmount) {
		this.accountBalance += depositAmount;
	}

	public void withdrawal(double withdrawalAmount) {

		if (this.accountBalance - withdrawalAmount < 0) {

			System.out.println("Only " + this.accountBalance + " available. Withdrawal no processed.");
		} else {

			this.accountBalance -= withdrawalAmount;
			System.out.println(
					"Withdrawal of " + withdrawalAmount + " processed. Remainin balance = " + this.accountBalance);
		}
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(double balance) {
		this.accountBalance = balance;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmailAddress() {
		return customerEmailAddress;
	}

	public void setCustomerEmailAddress(String customerEmailAddress) {
		this.customerEmailAddress = customerEmailAddress;
	}

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}

}
