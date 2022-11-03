# Dependency Inversion

1. states that high-level modules should not depend on low-level modules; both should depend on abstractions.
2. Likewise, Abstractions should not depend on details; Details should depend on abstractions.

**In the end, you have 2 dependencies:**

- the high-level module depends on the abstraction
  **_and_**
- the low-level depends on the same abstraction.
