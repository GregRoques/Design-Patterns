// ==================================================== functional example

function outerFunction(outerVariable) {
  const outer2 = "Won't the real Slim Shady please stand up.";
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: ") + innerVariable;
    console.log(outer2);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// returns:
/*
     Outer Variable: outside
     Inner Variable: inside
     Won't the real Slim Shady please stand up.
*/

// How this works:
/*

When we first run "outerFunction("outside")", it sets the outer variable, and return the inner variable as the result of the function call

Now, new function calls the inner function whenever it is invoked

If you were to call "console.log(outerVariable)", you would get an error, as it is no longer in global scope as it is scoped to the inner function

As the inner function was in the same scope as "outer2" when it was assigned to "newFunction", this variable is also scoped to it

*/

// ===============================================================================================================================
// More common real world example is an api call

function getAPI(url, outervar) {
  fetch(url).then(() => {
    console.log(url);
    console.log(outerVar);
  });
}
