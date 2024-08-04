//a simple script for the static website
window.onload = function () {
  clockDisplay();
};
function clockDisplay() {
  const date = new Date();
  clockDiv = document.getElementById("clock");
  const time = date.toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  clockDiv.innerText = time;
  setTimeout(clockDisplay, 1000);
}
