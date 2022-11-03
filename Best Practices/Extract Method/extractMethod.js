//Problem:
function printOwing() {
  printBanner();

  // Print details.
  return "name: " + name + "\n" + "amount: " + getOutstanding();
}

//Solution

function printOwing() {
  printBanner();
  printDetails(getOutstanding());
}

function printDetails(outstanding) {
  return "name: " + name + "\n" + "amount: " + outstanding;
}

// The more lines found in a method, the harder it’s to figure out what the method does. This is the main reason for this refactoring.
// Also makes functions more reusable accross application
