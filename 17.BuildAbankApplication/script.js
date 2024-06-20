// Define a customer account object
const customerAccount = {
    name: "John Doe",
    balance: 1000,

    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance is ${this.balance}`);
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
};

// Example usage:
console.log("Current balance:", customerAccount.balance); // Output: Current balance: 1000

customerAccount.deposit(500); // Output: Deposit of 500 successful. New balance is 1500

customerAccount.withdraw(200); // Output: Withdrawal of 200 successful. New balance is 1300

customerAccount.withdraw(1500); // Output: Insufficient funds
