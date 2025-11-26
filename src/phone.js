class Phone {
  batteryLevel = 100;

  #password;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (this.#password === password) {
      return true;
    }
    return false;
  }
}

class iPhone extends Phone {
  constructor(model, batteryLevel, numberOfCameras) {
    super(`Apple`, model, batteryLevel);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    return `${super.makeCall(number)} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE
const flipPhone = new Phone(`Nokia`, `Flip`, `TimeToLearn882`);
console.log(flipPhone);

// 1. Making a call and checking battery
console.log(flipPhone.makeCall(`123-456-7890`));
console.log(flipPhone.batteryLevel);

// 2. Charging and checking battery
console.log(flipPhone.charge(`123-456-7890`));
console.log(flipPhone.batteryLevel);

// 3. Unlocking the phone
console.log(flipPhone.unlock(`TimeToLearn882`));
console.log(flipPhone.unlock(`TimeToLearn88`));

const smartPhone = new iPhone(`iPhone 14 Pro`, `TimeToLearn882`, 3);

console.log(smartPhone);

// 1. Making a call
console.log(smartPhone.makeCall(`555-1234`));
console.log(smartPhone.batteryLevel);

// 2. Using the faceTime method
console.log(smartPhone.faceTime(`Alice`));
console.log(smartPhone.batteryLevel);

// 3. Charge the phone
console.log(smartPhone.charge());
console.log(smartPhone.batteryLevel);

// 4. Unlock the phone
console.log(smartPhone.unlock(`0000`));
console.log(smartPhone.unlock(`TimeToLearn882`));

// DO NOT REMOVE
module.exports = { Phone, iPhone };
