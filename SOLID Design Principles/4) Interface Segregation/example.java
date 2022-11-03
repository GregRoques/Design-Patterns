interface Entity {
    int attackDamage = 0;
    int health = 0;
    String name = "Midnight the Cat";

    public void move();

    public void attack();

    public void takeDamage(int amount);
}

class Character implements Entity {
    public void move() {

    }

    public void attack() {

    }

    public void takeDamage(int amount) {

    }
}

class Sniper implements Entity {

    // doesn't move... hence the error "The type Sniper must implement the inherited
    // abstract method Entity.move()"
    // thus, we are breaking the Interface Segregation principle

    public void attack() {

    }

    public void takeDamage(int amount) {

    }
}

class Main {
    public static void main(String[] args) {

    }
}
