# Inheritance vs. Composition

- The main difference between inheritance and composition is in the relationship between objects.

**Inheritance:** _“is a.” E.g. The car is a vehicle._

- when a child class inherits from a parent class, the child acquires all behaviors from the parent. Inheritance will make a class hierarchy — you can imagine it as a tree of classes.

**Composition:** _“has a.” E.g. The car has a steering wheel._

- contains instances of other classes that implement the desired functionality.
- helps prevent deep heirarchies that can occur with inheritance; easier in Java thanks to interface inheritance

### They’re different in purpose too.

**Inheritance:** To design a class on what it is.
**Composition:** To design a class on what it does.

### Use When:

- Use _Composition_ when the relationship is “A has an X capability.”
- Use _Inheritance_ when the relationship is “A is of X type.”
