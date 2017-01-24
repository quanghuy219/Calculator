var current = "";
var memory = "";
var expression = "";
var operation = 0;
var on = false;


function addDigit(digit) {
  if (on == false) {
    expression = digit;
    document.cal.display.value = digit;
    on = true;
  }
  else {
  current = current + digit;
  expression += digit;
  document.cal.display.value += digit;

}
}

function dotDecimals() {
  if (current.indexOf('.') != -1) {
    current = "";
    expression = "";
    cal.display.value = "Syntax Error!!!";
  }
  else {
    current = current + '.';
    expression += '.';
  }
  cal.display.value += '.';
  on = true;
}

function Operate(op) {
  memory = current;
  current = "";
if(op == '*') {
  operation = 1;
  expression += "*";
  cal.display.value += '\xD7';
}
if(op == "/") {
  operation = 2;
  expression += "/";
  cal.display.value += '\xF7';
}
if(op == '+') {
  operation = 3;
  expression += '+';
  cal.display.value += "+";
}
if(op == '-') {
  operation = 4;
  expression += '-';
  cal.display.value += "-";
}
on = true;
}

function Calculate() {
    cal.display.value = eval(expression);
      on = false;
  }


function Clear() {
  current = '';
  expression = '';
  memory = '';
  operation = 0;
  cal.display.value = expression;
}
