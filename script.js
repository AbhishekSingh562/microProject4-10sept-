function getInput(value) {
  const display = document.getElementsByName("display")[0];

  if (value === "=") {
    display.value = eval(display.value);
  } else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } else if (value === "RESET") {
    display.value = "";
  } else {
    display.value += value;
  }
}

//ussing buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".calculator button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;
      getInput(buttonText);
    });
  });
});
