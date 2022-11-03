class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage.`
    );
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
} // similar to interface segregation, this does not use all of our properties

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }
  move() {
    return null;
  }

  takeDamage() {
    return null;
  }
} // similar to interface segregation, this does not use all of our properties

const turret = new Turret("Turret", 5);
const character = new Character("Midnight", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);
