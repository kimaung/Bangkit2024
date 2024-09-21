// 1. Membuat class bernama Animal
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

// 2. Membuat class Rabbit yang merupakan turunan dari Animal
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal selalu bernilai true untuk Rabbit
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

// 3. Membuat class Eagle yang merupakan turunan dari Animal
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal selalu bernilai false untuk Eagle
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

// 4. Membuat instance dari class Rabbit dengan properti name "Labi" dan age 2
const myRabbit = new Rabbit("Labi", 2);

// 5. Membuat instance dari class Eagle dengan properti name "Elo" dan age 4
const myEagle = new Eagle("Elo", 4);

// Testing output
console.log(myRabbit.eat()); // Output: "Labi sedang makan!"
console.log(myEagle.fly()); // Output: "Elo sedang terbang!"
