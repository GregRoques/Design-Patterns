const eat = function () {
  return {
    eat: () => {
      console.log("I am eating");
    },
  };
};
const breathe = function () {
  return {
    breathe: () => {
      console.log("I am breathing");
    },
  };
};
const swim = function () {
  return {
    swim: () => {
      console.log("I am swimming");
    },
  };
};
const trick = function () {
  return {
    trick: () => {
      console.log("I am doing a trick");
    },
  };
};
const superMagician = () => {
  return Object.assign({}, eat(), breathe(), swim(), trick());
};
const noviceMagician = () => {
  return Object.assign({}, eat(), breathe(), swim());
};

let harry = superMagician();
harry.eat();
harry.breathe();
harry.swim();
harry.trick();

let liv = noviceMagician();
liv.eat();
liv.breathe();
liv.swim();
