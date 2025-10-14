let count = 0;
function plusFunction() {
  if (count < 5) {
    count++;
    document.getElementById("counter").textContent = count;
  }
}

function minusFunction() {
  if (count <= 5 && count > 0) {
    count--;
    document.getElementById("counter").textContent = count;
  }
}

function resetFunction() {
  console.log("count:" + count);
  if ((count = !0)) {
    count = 0;
    document.getElementById("counter").textContent = count;
  }
}
