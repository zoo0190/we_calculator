const input = document.querySelector('input');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

let cal = {
  preNum: '',
};

let convert = true;
let equalkey;

window.addOutput = num => {
  if (convert) {
    input.value = input.value + num;
  } else {
    input.value = '';
    input.value = input.value + num;
    convert = true;
  }
};

function clickPlus() {
  if (convert && cal.preNum !== '') {
    cal.preNum = parseInt(cal.preNum, 10) + parseInt(input.value, 10);
    input.value = cal.preNum;
    convert = false;
  } else {
    cal.preNum = input.value;
    convert = false;
  }
  return (equalkey = 'plus');
}

function clickMinus() {
  if (convert && cal.preNum !== '') {
    cal.preNum = parseInt(cal.preNum, 10) - parseInt(input.value, 10);
    input.value = cal.preNum;
    convert = false;
  } else {
    cal.preNum = input.value;
    convert = false;
  }
  return (equalkey = 'minus');
}

function clickMultiply() {
  if (convert && cal.preNum !== '') {
    cal.preNum = parseInt(cal.preNum, 10) * parseInt(input.value, 10);
    input.value = cal.preNum;
    convert = false;
  } else {
    cal.preNum = input.value;
    convert = false;
  }
  return (equalkey = 'multiply');
}

function clickDivision() {
  if (convert && cal.preNum !== '') {
    cal.preNum = parseInt(cal.preNum, 10) / parseInt(input.value, 10);
    input.value = cal.preNum;
    convert = false;
  } else {
    cal.preNum = input.value;
    convert = false;
  }
  return (equalkey = 'division');
}

window.reset = num => {
  input.value = num;
  cal.preNum = '';
  convert = false;
};

plus.addEventListener('click', clickPlus);
minus.addEventListener('click', clickMinus);
multiply.addEventListener('click', clickMultiply);
division.addEventListener('click', clickDivision);
equal.addEventListener('click', () => {
  switch (equalkey) {
    case 'plus':
      input.value = parseInt(cal.preNum, 10) + parseInt(input.value, 10);
      cal.preNum = input.value;
      convert = false;
      break;
    case 'minus':
      input.value = parseInt(cal.preNum, 10) - parseInt(input.value, 10);
      cal.preNum = input.value;
      convert = false;
      break;
    case 'multiply':
      input.value = parseInt(cal.preNum, 10) * parseInt(input.value, 10);
      cal.preNum = input.value;
      convert = false;
      break;
    case 'division':
      input.value = parseInt(cal.preNum, 10) / parseInt(input.value, 10);
      cal.preNum = input.value;
      convert = false;
      break;
    default:
  }
});
