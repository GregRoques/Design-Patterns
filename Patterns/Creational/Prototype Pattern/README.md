# Prototype Pattern

- a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

- The prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. _Usually, such an interface contains just a single_ **_clone method_**.

## Shallow vs. Deep Clone

A **shallow copy** of an object copies the ‘main’ object, but doesn’t copy the inner objects. The ‘inner objects’ are shared between the original object and its copy.

A **deep copy** is a fully independent copy of an object, not a _reference_ object like the shallow copy.

- see **com.prototype > BookShop.java** file for how to thow _shallow_ and _deep_ copies
