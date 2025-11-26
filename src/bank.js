class BankAccount {
  static #totalNumberOfAccounts = 0;

  #balance = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];

  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => { total += account.balance; });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }
}

// TEST YOUR CODE HERE
const myBank = new Bank('First National');
console.log(myBank);

const account1 = new BankAccount('001', 'Alice');
const account2 = new BankAccount('002', 'Bob');
console.log(account1);
console.log(account2);

myBank.addAccount(account1);
myBank.addAccount(account2);
console.log(myBank.accounts);

account1.deposit(100);
account1.withdraw(50);
account2.deposit(250);
console.log(myBank.getTotalBalance());

console.log(myBank.findAccount('001').ownerName);

const account3 = new BankAccount('003', 'Charlie');
console.log(account3);
console.log('Total accounts:', BankAccount.getTotalNumberOfAccounts());

// DO NOT REMOVE
module.exports = { BankAccount, Bank };
