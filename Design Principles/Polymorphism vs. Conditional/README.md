# Conditional vs. Polymorphism

- This technique adheres to the Tell-Don’t-Ask principle: instead of asking an object about its state and then performing actions based on this, it’s much easier to simply tell the object what it needs to do and let it decide for itself how to do that.

- Removes duplicate code: You get rid of many almost identical conditionals.

- If you need to add a new execution variant, all you need to do is add a new subclass without touching the existing code (**_see:_** **Open/Closed Principle**).

## Polymorphism

- **Polymorphism** means _"many forms"_, and it occurs when we have many classes that are related to each other by inheritance. It gives a program the ability to redefine methods for derived classes.

- It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.
