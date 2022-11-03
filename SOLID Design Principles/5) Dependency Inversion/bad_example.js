class Store {
  constructor(user) {
    this.stripe = new Stripe(user);
    this.convertToCents = 100;
  }

  purchaseBike(quantity) {
    this.stripe.makePayment(200 * quantity * this.convertToCents);
  }
  purchaseHelmet(quantity) {
    this.stripe.makePayment(15 * quantity * this.convertToCents);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of ${amountInCents / 100} with Stripe`
    );
  }
} // this api works with our store, which takes a user in the constructor and converts payment to cents

class PayPal {
  makePayment(name, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with PayPal`);
  }
} // this api does not work with our Store class, which was tailored towards the Stripe API

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
