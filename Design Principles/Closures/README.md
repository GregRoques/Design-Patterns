# Closure

**Closure** gives you access to an outer function's scope from an inner function.

- In JavaScript, closures are created every time a function is created, at function creation time.

- In summary, if an inner function is assigned inside of another (outer) function, it has access to its parent's scope (and its parent's scope) even if the outer function is finished executing

**_Example:_**

```
let myNameIs = "Slim Shady"; // global variable, so it is available inside function

function printName() {
  console.log(myNameIs); // in lexical scoping, this has access to the variables in its parent scope
}

myNameIs = "Marshal Mathers"

printName(); // return "Marshal Mathers"... returns the most recent assignment to the variable
```

## Scopes

### Lexical Scpoe

**Lexical (AKA static)** scoping refers to the scope of a variable is determined by the lexical (i.e., textual) structure of a program.

- A variable always refers to its top-level environment. Put another way, inner functions contain the scope of parent functions even if the parent function has returned.

### Dynamic Scope

Under **dynamic scoping**, a variable is bound to the most recent value assigned to that variable, i.e., the most recent assignment during the program’s execution (run time).

**_Example:_**

```
let x = 1
const f = function(a) return x + a
const g = function() {
  x = 2
  f(0)
}
g()
```

- In the example above, the free variable x in the body of f is evaluated when f(0) is called on line 5. At that point (during program execution), the most recent assignment was on line 4.

- Therefore, under dynamic scoping, the example program returns 2.
