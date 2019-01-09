let n1, n2, result;

function addition() {

  n1 = document.getElementById('num1').value;
  n1 = parseFloat(n1);

  n2 = document.getElementById('num2').value;
  n2 = parseFloat(n2);

  result = n1 + n2;

  if(isNaN(result)) {
    alert("Впевніться будь ласка що введені обидва числа!");
    document.getElementById('summ').innerHTML = '0';
  }
  else {
    document.getElementById('summ').innerHTML = result.toFixed(2);
    console.log(result);
  }
}

function substraction() {

  n1 = document.getElementById('num1').value;
  n1 = parseFloat(n1);

  n2 = document.getElementById('num2').value;
  n2 = parseFloat(n2);

  result = n1 - n2;

  if(isNaN(result)) {
    alert("Впевніться будь ласка що введені обидва числа!");
    document.getElementById('summ').innerHTML = '0';
  }
  else {
    document.getElementById('summ').innerHTML = result.toFixed(2);
    console.log(result);
  }
}

function multiplication() {

  n1 = document.getElementById('num1').value;
  n1 = parseFloat(n1);

  n2 = document.getElementById('num2').value;
  n2 = parseFloat(n2);

  result = n1 * n2;

  if(isNaN(result)) {
    alert("Впевніться будь ласка що введені обидва числа!");
    document.getElementById('summ').innerHTML = '0';
  }
  else {
    document.getElementById('summ').innerHTML = result.toFixed(2);
    console.log(result);
  }
}

function division() {

  n1 = document.getElementById('num1').value;
  n1 = parseFloat(n1);

  n2 = document.getElementById('num2').value;
  n2 = parseFloat(n2);

  result = n1 / n2;

  if(isNaN(result)) {
    alert("Впевніться будь ласка що введені обидва числа!");
    document.getElementById('summ').innerHTML = '0';
  }
  else {
    document.getElementById('summ').innerHTML = result.toFixed(2);
    console.log(result);
  }
}

function reset() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('summ').innerHTML = '0';
}