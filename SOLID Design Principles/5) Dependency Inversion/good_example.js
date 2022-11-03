/*
here, we create abstract Classes between the high level "Store" class
and the APIs it accesses for payment so as not to change the APIs or 
the Store Class when modifying for usability
*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcess {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100); // to convert to cents
  }
} // this will customize the Stripe API to our Store class

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of ${amountInCents / 100} with Stripe`
    );
  }
} // hypothetical Stripe API

class PayPalPaymentProcess {
  constructor(user) {
    this.paypal = new PayPal();
    this.user = user;
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
} // this will customize the PayPal API to our Store class

class PayPal {
  makePayment(name, amountInDollars) {
    console.log(`${name} made payment of ${amountInDollars} with PayPal`);
  }
} // hypothetical PayPal API

const store = new Store(new StripePaymentProcess("Callie"));
store.purchaseBike(2);
store.purchaseHelmet(2);

const storeWithPayPal = new Store(new PayPalPaymentProcess("Midnight"));
storeWithPayPal.purchaseBike(2);
storeWithPayPal.purchaseHelmet(2);
