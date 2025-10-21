let count = 0;
function increase() {
  if (count < 5) {
    count++;
    document.getElementById("counter").textContent = count;
  }
}

function decrease() {
  if (count <= 5 && count > 0) {
    count--;
    document.getElementById("counter").textContent = count;
  }
}

function reset() {
  console.log("count:" + count);
    count = 0;
    document.getElementById("counter").textContent = count;
}
