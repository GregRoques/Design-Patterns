class Bird {
  constructor(basespeed = 1) {
    this.basespeed = basespeed;
  }
  getBaseSpeed() {
    return this.basespeed;
  }
}

class European extends Bird {
  constructor() {
    super(5);
  }
  getSpeed() {
    return this.getBaseSpeed();
  }
}

const european = new European();

class African extends Bird {
  constructor() {
    super(10);
    this.windSpeed = 4;
    this.coconutsCarried = 2;
  }
  getSpeed() {
    return this.getBaseSpeed() - this.windSpeed * this.coconutsCarried;
  }
}

const african = new African();

class NorwegianBlue extends Bird {
  constructor(isNailed = false, voltage = 2) {
    super();
    this.isNailed = isNailed;
    this.voltage = voltage;
  }
  getSpeed() {
    return !this.isNailed ? 0 : this.getBaseSpeed() * this.voltage;
  }
}

class DoDo extends Bird {
  getSpeed() {
    return this.getBaseSpeed();
  }
}

const birds = {
  bluejay: new European(),
  tucan: new African(0),
  redherring: new NorwegianBlue(true, 9),
  dead: new DoDo(),
};

for (bird in birds) {
  console.log(`The ${bird}'s speed is ${birds[bird].getSpeed()}`);
}
