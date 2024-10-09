document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let currentInput = "";
  let lastOperator = "";

  document
    .querySelectorAll(".listenumero button, .liste-char button")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const value = this.innerText;

        if (value === "AC") {
          currentInput = "";
          display.innerText = "";
        } else if (value === "dele") {
          currentInput = currentInput.slice(0, -1);
          display.innerText = currentInput;
        } else if (value === "=") {
          try {
            if (lastOperator === "^") {
              const parts = currentInput.split("^");
              currentInput = Math.pow(
                parseFloat(parts[0]),
                parseFloat(parts[1])
              ).toString();
            } else {
              currentInput = eval(currentInput);
            }
            display.innerText = currentInput;
            lastOperator = "";
          } catch {
            display.innerText = "Error";
          }
        } else if (value === "√") {
          currentInput = Math.sqrt(parseFloat(currentInput)).toString();
          display.innerText = currentInput;
        } else if (value === "log") {
          currentInput = Math.log10(parseFloat(currentInput)).toString();
          display.innerText = currentInput;
        } else if (value === "x²") {
          currentInput = Math.pow(parseFloat(currentInput), 2).toString();
          display.innerText = currentInput;
        } else if (value === "^") {
          currentInput += "^";
          lastOperator = "^";
        } else {
          currentInput += value;
          display.innerText = currentInput;
        }
      });
    });
});
