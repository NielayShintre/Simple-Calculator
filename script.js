function add() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var add = input1 + input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} + ${input2} = ${add}`;
}

function sub() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var sub = input1 - input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} - ${input2} = ${sub}`;
}

function mul() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var mul = input1 * input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} * ${input2} = ${mul}`;
}

function div() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var div = input1 / input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} / ${input2} = ${div}`;
}

function exp() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var exp = input1 ** input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} ** ${input2} = ${exp}`;
}

function rem() {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var rem = input1 % input2;
  var res = document.getElementById("res");
  res.innerHTML = `${input1} % ${input2} = ${rem}`;
}

function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("res").innerHTML = "";
}
