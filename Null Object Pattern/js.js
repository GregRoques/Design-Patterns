class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name.toLowercase() === "bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user === null) {
    return new NullUser();
  }
  return user;
}

function printUser(id) {
  const user = getUser(id);

  //   let name = "Guest";
  //   if (user != null && user.name != null) {
  //     name = user.name;
  //   }
  // ============================================================= Null User Class replaces this;
  console.log(`Hello ${user.name}`);

  //   if (user != null && user.hasAccess != null && user.hasAccess()) {
  if (user.hasAccess()) {
    console.log("You have Access");
  } else {
    console.log("You don't have access");
  }
}
