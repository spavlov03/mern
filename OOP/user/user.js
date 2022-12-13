class User { 
  constructor(userName,emailAddress) { 
    this.name = userName
    this.email = emailAddress
    this.accountBalance = 0
  }
  makeDeposit(amount) {
    this.accountBalance += amount; 
  }
  makeWithdrawal(amount) { 
    this.accountBalance -= amount;
  }
  displayBalance() { 
    console.log(`User: ${this.name}, Balance:$${this.accountBalance}`)
  }
  transferMoney(otherUser,amount) {
    this.accountBalance -= amount; 
    otherUser.accountBalance += amount;
  }
}

const svet = new User("spavlov","spavlov@hotmail.com"); 
const pavel = new User("pavel","pavel@gmail.com"); 
const mitko = new User("mitko","mitkomb@gmail.com")

svet.makeDeposit(100)
svet.makeDeposit(50);
svet.makeDeposit(25); 
svet.makeWithdrawal(5); 
svet.displayBalance();
pavel.makeDeposit(100); 
pavel.makeDeposit(50); 
pavel.makeWithdrawal(25); 
pavel.makeWithdrawal(5); 
pavel.displayBalance();
mitko.makeDeposit(200); 
mitko.makeWithdrawal(25);
mitko.makeWithdrawal(15);
mitko.makeWithdrawal(10);
mitko.displayBalance();
svet.transferMoney(mitko,70); 
svet.displayBalance();
mitko.displayBalance();