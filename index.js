function adder(x, y) {
  return x + y;
}
// TODO: Add functions for 'subtractor', 'multiplier' and 'divider' - each just takes in 2 NUMBERS.
function subtractor(x, y) {
  return x - y;
}
function multiplier(x, y) {
  return x * y;
}
function divider(x, y) {
  return x / y;
}
/**
 * 'calculate' is specifying 3 NAMED PARAMETERS.
 *
 * TODO: REFACTOR this so that it does this via OBJECT DESTRUCTURING.
 * No DEFAULT VALUES needed.
 *
 */
function calculate({ mathFxn, num1, num2 }) {
  // TODO: RETURN the result of INVOKING 'mathFxn' with 'num1' and 'num2' as the ARGUMENTS.
  //return mathFxn(num1, num2);

  return `${mathFxn(num1, num2)}`;
}

console.log(calculate({ mathFxn: adder, num1: 10, num2: 2 }));
console.log(calculate({ mathFxn: subtractor, num1: 10, num2: 2 }));
console.log(calculate({ mathFxn: divider, num1: 10, num2: 2 }));
console.log(calculate({ mathFxn: multiplier, num1: 10, num2: 2 }));
