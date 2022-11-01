# Single Responsibility Principle (SRP)

- The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, **_every class should have only one reason to change_**.

**Ex:**

```
class Student {

     registerStudent() {
         // some logic
     }

     calculate_Student_Results() {
         // some logic
     }

     sendEmail() {
         // some logic
     }

}
```

- The class above violates the single responsibility principle: **_it has 3 responsibilities_**

**Fix:**

```
class StudentRegister {
    registerStudent() {
        // some logic
    }
}
class StudentResult {
    calculate_Student_Result() {
        // some logic
    }
}
class StudentEmails {
    sendEmail() {
        // some logic
    }
}
```
