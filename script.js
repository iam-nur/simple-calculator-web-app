document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll("button");

  keys.forEach((key) => {
    key.addEventListener("click", function () {
      if (key.value === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (key.value === "C") {
        display.value = "";
      } else {
        display.value += key.value;
      }
    });
  });
});
