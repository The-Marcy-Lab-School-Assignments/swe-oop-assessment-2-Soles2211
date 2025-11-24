# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- \[\] Answered all parts of every question
- \[\] No typos or grammar mistakes (use grammarly!)
- \[\] Accurately uses relevant technical terminology
- \[\] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- \[\] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

- Encapsulation is akin to using a smartphone on a daily basis. To use a phone, you don't need to know how the circuits, wires, plates, and transistors connect and function together. You only need to turn it on and tap the screen to get it to function.
- In the same way all the components of a smartphone are hidden beneath its casing, encapsulation is the concept of hiding data within a class and controlling access to it using its properties and methods as an interface.
- Encapsulation is beneficial because it prevents unauthorized modification or misuse of applications.
- In the example below, the `PasswordManager` class demonstrates encapsulation by controlling access to its #`password` property, making it private by prefacing it with a hashtag. Now, it cannot be accessed outside of the class.

```js
class PasswordManager {
  #password;

  constructor(password) {
    this.#password = password;
  }

  checkPassword(attempt) {
    return this.#password === attempt ? true : false;
  }

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    } else {
      return false;
    }
  }
}

const myPW = new PasswordManager("abc");
console.log(myPW.checkPassword("abc")); // true
console.log(myPW.checkPassword("blah")); // false

console.log(myPW.setPassword("blah", "foobar")); // false
console.log(myPW.setPassword("abc", "foobar")); // true

console.log(myPW.checkPassword("foobar")); // true
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

    class Counter {
    	constructor() {
    		this.count = 0;
    	}
      increment() {
        this.count++;
      }
    }

    const counterA = new Counter();
    const counterB = new Counter();

    counterA.increment();
    counterA.increment();
    counterA.increment();

    counterB.increment();

    console.log(counterA.count);
    console.log(counterB.count);

## Response 2

- The `this` keyword is an encapsulation tool used to refer to an object within a certain context. Most often, it is used when a method is invoked by an instance (object) to refer to that instance.
- The keyword is useful because it makes your code reusable by easily referring to the object you need when reusing properties and methods.
- The `this` keyword refers to the `count` property within the constructor of the `Counter` class.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

```js
/**
 * Creature Class
 *
 * A superclass for magical creatures with name and habitat.
 */

class Creature {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }

  describe() {
    return `${this.name} lives in the ${this.habitat}.`;
  }

  sleep() {
    return `${this.name} falls asleep in the ${this.habitat}. 😴`;
  }
}

/**
 * Dragon Class
 *
 * A subclass of Creature that can breathe fire.
 */

class Dragon extends Creature {
  constructor(name, habitat, firePower) {
    super(name, habitat);
    this.firePower = firePower;
  }

  specialMove() {
    return `${this.name} breathes fire with ${this.firePower} intensity! 🔥`;
  }
}

/**
 * Unicorn Class
 *
 * A subclass of Creature that can heal with sparkles.
 */

class Unicorn extends Creature {
  constructor(name, habitat, sparkleLevel) {
    super(name, habitat);
    this.sparkleLevel = sparkleLevel;
  }

  specialMove() {
    return `${this.name} heals allies with a sparkle level of ${this.sparkleLevel}! ✨`;
  }
}
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4
