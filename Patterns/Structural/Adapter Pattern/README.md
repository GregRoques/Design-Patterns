# Adapter Pattern

- a structural design pattern that allows objects with incompatible interfaces to collaborate via an "adapter" class. It is often used to make existing classes work with others without modifying their source code.

### In the attached example:

A Pen interface is needed in AssignmentWork class, but we can't pass it directly.

so, a separate class is created which implements Pen interface and it is called as adapter class.

and now it can be passed to AssignmentWork class.

hence both classes gets connected through an adapter.
