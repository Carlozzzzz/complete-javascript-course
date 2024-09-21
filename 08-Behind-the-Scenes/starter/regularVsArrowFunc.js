'use strict';

/**
 * Regular functions Vs. Arrow functions
 */

const carlos = {
  firstName: 'Carlos',
  year: 2000,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // solution 1
    // const self = this;
    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // the parent of this one is global scope (window obj)
  greet: () => console.log(`Hey ${this.firstName}`),
};

carlos.greet();
carlos.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5);
