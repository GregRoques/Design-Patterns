class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(
    name,
    {
      age = "No Age Listed",
      phone = "No Number Listed",
      address = "No Address Listed",
    } = {}
  ) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10, address: new Address("1", "main") });
console.log(user);
