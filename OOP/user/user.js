class User { 
  constructor(userName,emailAddress) { 
    this.name = userName
    this.email = emailAddress
    this.accountBalance = 0
  }
  makeDeposit(amount) {
    this.accountBalance += amount; 
    return this;
  }
  makeWithdrawal(amount) { 
    this.accountBalance -= amount;
    return this;
  }
  displayBalance() { 
    console.log(`User: ${this.name}, Balance:$${this.accountBalance}`)
    return this;
  }
  transferMoney(otherUser,amount) {
    this.accountBalance -= amount; 
    otherUser.accountBalance += amount;
    return this;
  }
}

const svet = new User("spavlov","spavlov@hotmail.com"); 
const pavel = new User("pavel","pavel@gmail.com"); 
const mitko = new User("mitko","mitkomb@gmail.com")

svet.makeDeposit(100).makeDeposit(50).makeDeposit(25).makeWithdrawal(5).displayBalance();
pavel.makeDeposit(100).makeDeposit(50).makeWithdrawal(25).makeWithdrawal(5).displayBalance();
mitko.makeDeposit(200).makeWithdrawal(25).makeWithdrawal(15).makeWithdrawal(10).displayBalance();
svet.transferMoney(mitko,70).displayBalance();
mitko.displayBalance();