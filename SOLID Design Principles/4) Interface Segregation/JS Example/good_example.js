// ========================= super class

class Entity {
  constructor(name) {
    this.name = name;
  }
}

// ========================= functional components

const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage.`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

// ========================= sub classes

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret.prototype, attacker);

// ========================= instantiate and call

const turret = new Turret("Turret", 5);
const character = new Character("Midnight", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);

// =============================================================================================================

/*
NOTE: Definition of Javascript "Prototype"

- The prototype object is special type of enumerable object to which additional properties can be attached to it 
which will be shared across all the instances of it's constructor function.

*/
