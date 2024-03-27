
export const stopTime = (button) => {
  button.addEventListener("click", () => changeText(button));

  function changeText(button) {
    button.textContent = "Nope sorry hehe";
    setTimeout(() => (button.textContent = "Try again"), 1000);
    setTimeout(() => (button.textContent = "Stop Time!"), 2000);
  }
};