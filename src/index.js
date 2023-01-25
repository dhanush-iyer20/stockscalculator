import "./styles.css";
var btn = document.getElementById("btn");
var buyprice = document.getElementById("buyprice");
var qty = document.getElementById("qty");
var currentprice = document.getElementById("currentprice");
var result = document.getElementById("result");

function eventHandler() {
  var totalinvestment = qty.value * buyprice.value;
  var currenttotal = qty.value * currentprice.value;
  var status = totalinvestment - currenttotal;
  console.log(totalinvestment, currenttotal, status);
  if (status > 0) {
    result.innerText =
      "You have a loss of " +
      Math.abs(status) +
      " ruppees and the loss percentage is " +
      Math.abs((status / totalinvestment) * 100);
  } else if (status == 0) {
    result.innerText = "You have no profit or loss";
  } else if (status < 0) {
    result.innerText =
      "You have a profit of " +
      Math.abs(status) +
      " ruppees and the profit percentage is " +
      Math.abs((status / totalinvestment) * 100);
  }
}

btn.addEventListener("click", eventHandler);
