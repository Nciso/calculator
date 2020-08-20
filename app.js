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

const operands = [0, 0]

const state = createState({
  display: "0.00", // creates initial state
  buffer: 0,
  clearDisplay: true,
  operator: null,
  lastOperator: '+'
});
// setup of display
document.querySelector('[data-binding="display"]').innerHTML = state.display;

document
  .getElementsByClassName("numbers-tiles")[0]
  .addEventListener("click", function (event) {
    if (state.clearDisplay) {
      state.display = event.target.innerHTML;
      state.clearDisplay = false;
    } else {
      state.display += event.target.innerText; 
    }
  });

document
  .getElementsByClassName("operator-tiles")[0]
  .addEventListener("click", function (event) {
      state.operator = event.target.innerText
      operands[1] = state.display
      state.clearDisplay =  true
      for(let i=0; i<operands.length; i++) {
        operands[i] = parseFloat(operands[i])
      }
      
      if(state.operator == '+'){
        operands[0] = sum(operands[0], operands[1])
        operands[1] = 0
        
      }
      if(state.operator == '='){
        if(state.lastOperator == '+'){
          operands[0] = sum(operands[0], operands[1])
          operands[1] = 0
        }
      }
      state.display = parseFloat(operands[0]).toFixed(2)
      state.lastOperator = state.operator
  });


function sum(a, b) {
  return a + b;
}

// implement functions below