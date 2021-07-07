import { input } from "./input";

// Defino contadores de contraseñas que cumplen con las diferentes políticas y
// las exporto
export let policy1__counter = 0;
export let policy2__counter = 0;

input.forEach((el) => {
  // separo variables del input en:
  let firstNum = el.split(" ")[0].split("-")[0];
  let secondNum = el.split(" ")[0].split("-")[1];
  let char = el.split(" ")[1];
  let pass = el.split(" ")[2];

  // defino una expresion regular para buscar el caracter correspondiente
  let expression = new RegExp(char, "g");

  // defino primera política
  let policy1__isValid = pass.match(expression)
    ? pass.match(expression).length >= firstNum &&
      pass.match(expression).length <= secondNum
    : false;

  // defino segunda política
  let policy2__isValid = false;

  if (pass.split("")[firstNum - 1] === char) {
    if (pass.split("")[secondNum - 1] === char) {
      policy2__isValid = false;
    } else {
      policy2__isValid = true;
    }
  }

  // condición para aumentar los contadores
  if (policy1__isValid) {
    policy1__counter++;
  }

  if (policy2__isValid) {
    policy2__counter++;
  }
});
