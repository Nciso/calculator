function evaluate(operands, lastOperator) {
  const [a, b] = operands;
  //  implement sum
  if (lastOperator == "+") {
    operands[0] = sum(a, b);
    operands[1] = 0;
  }
  //implement if statements here
}
