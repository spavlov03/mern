class BankAccount { 
  constructor(intRate,balance) { 
    this.accountBalance = balance
    this.interest = intRate
  }
  deposit(amount) { 
    this.accountBalance += amount;
    return this
  }
  withdraw(amount) {
    if (amount > this.accountBalance){ 
      console.log("Insufficient funds: Charging a $5 fee")
      this.accountBalance -= 5;
      return this
    } else {
      this.accountBalance -= amount; 
      return this
    }
  }
  dispalyAccountInfo() { 
    console.log(`Account balance is :$${this.accountBalance}`)
    return this
  }
  yieldInterest() { 
    if (this.accountBalance>0){
      this.accountBalance += (this.interest*this.accountBalance)
      return this
    }
  }
}