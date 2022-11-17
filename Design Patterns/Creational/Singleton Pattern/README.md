# Singleton Pattern

- restricts object creation for a class to only one instance at a time.

Typically, this is accomplished by:

1. Declaring all constructors of the class to be private, which prevents it from being instantiated by other objects
2. Providing a static method that returns a reference to the instance

- Problematic, as it is a global object and changing it can cause run errors throughout application.

## Object.freeze()

The **Object.freeze()** method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

- Freezing an object is the highest integrity level that JavaScript provides.
