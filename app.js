/**
 * Create state is a function that setups the data bindning for the display
 * in calculator
 */
const createState = (state) => {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value; // default set behaviour
      render(); // updates the view everytime the state changes
      return true;
    },
  });
};
// this function updates the display in the calculator
const render = () => {
  document.querySelector('[data-binding="display"]').innerHTML = state.display;
};

const state = createState({
  display: "0.00", // displays initial state in UI
  clearDisplay: true, // check if need to rewrite display, keep last value on operations
  lastOperator: "+",
  operands: [0, 0],
});

// setup of display on the ui
document.querySelector('[data-binding="display"]').innerHTML = state.display;

//events for blue buttons (numbers)
document
  .getElementsByClassName("numbers-tiles")[0]
  .addEventListener("click", function (event) {
    // TODO
    if (event.target.innerText == "+/-") {
      return;
    }
    // TODO
    if (event.target.innerText == "%") {
      return;
    }
    // RETURN TO INITIAL STATE
    if (event.target.innerText == "C") {
      state.display = "0.00";
      state.clearDisplay = true;
      lastOperator = "+";
      return;
    }

    //Regular operation of the display
    if (state.clearDisplay) {
      state.display = event.target.innerText;
      state.clearDisplay = false;
    } else {
      state.display += event.target.innerText;
    }
  });

// events for orange buttons (operators)
document
  .getElementsByClassName("operator-tiles")[0]
  .addEventListener("click", function (event) {
    state.operands[1] = state.display;
    state.clearDisplay = true;
    // convert operators into floats
    for (let i = 0; i < state.operands.length; i++) {
      state.operands[i] = parseFloat(state.operands[i]);
    }
    evaluate(state.operands, state.lastOperator);
    if (event.target.innerText == "=") {
      evaluate(state.operands, state.lastOperator);
    }
    state.lastOperator = event.target.innerText;
    state.display = parseFloat(state.operands[0]).toFixed(2);
  });

function evaluate(operands, lastOperator) {
  const [a, b] = operands;
  //  implement sum
  if (lastOperator == "+") {
    operands[0] = sum(a, b);
    operands[1] = 0;
  }
  //implement if statements here
}

// implement functions below

function sum(a, b) {
  return a + b;
}
