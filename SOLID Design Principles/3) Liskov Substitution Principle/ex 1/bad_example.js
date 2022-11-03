// LSP states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
} // this breaks the Liskov Priniciple, because it works differently for square and rectangle

const rec1 = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rec1);
increaseRectangleWidth(square);

console.log(rec1.area());
console.log(square.area());
