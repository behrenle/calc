function evaluate(str) {
  try {
    let result = eval(str);
    if (typeof(result) === "number") {
      output.value = result;
    } else if (result == undefined) {
      output.value = "";
    } else {
      output.value = "Eingabefehler!";
    }
  } catch(e) {
    output.value = "Eingabefehler!";
  }
  return;
}
