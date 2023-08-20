let total = 0;
let count = 0;
const button1 = document.getElementById("btn-coupon");
const button2 = document.getElementById("btn-purchase");
button1.disabled = true;
button2.disabled = true;
function cardClicked(id) {
  const stringValuePast = document.getElementById(id);
  const stringValue = stringValuePast.innerText;
  const productPrice = parseFloat(stringValue);
  const totalPriceString = document.getElementById("price-id").innerText;
  const totalPrice = parseFloat(totalPriceString);
  const productName =
    stringValuePast.parentNode.parentNode.childNodes[3].innerText;
  total = total + productPrice;
  if (total > 200) {
    button1.disabled = false;
  } else button1.disabled = true;
  if (total > 0) {
    button2.disabled = false;
  } else button2.disabled = true;

  addToPrice(productName, total.toFixed(2));
  addToTotal();

  const couponCode = document.getElementById("coupon-id").value;
  if (total > 200 && couponCode == "SELL200") {
    const value = getElement("price-id");
    const discountValue = value * 0.2;
    const discountValueFixed = discountValue.toFixed(2);
    document.getElementById("discount-id").innerText = discountValueFixed;
    const finalPrice = value - discountValueFixed;
    document.getElementById("total-id").innerText = finalPrice.toFixed(2);
  }
}
function addToTotal() {
  const totalString = document.getElementById("price-id").innerText;
  const total = parseFloat(totalString);
  const price = document.getElementById("price-id");
  const discountString = document.getElementById("discount-id").innerText;
  const discount = parseFloat(discountString);
  const finalPrice = total - discount;
  const finalPriceFixed = finalPrice.toFixed(2);

  document.getElementById("total-id").innerText = finalPriceFixed;
}

function addToPrice(productName, value) {
  const price = document.getElementById("price-id");

  price.innerText = value;
  const p = document.createElement("p");
  count++;

  p.innerHTML = `${count}. ${productName}`;

  const placeToKeep = document.getElementById("place-here");
  placeToKeep.appendChild(p);
}
function coupon() {
  const couponCode = document.getElementById("coupon-id").value;

  if (couponCode == "SELL200") {
    const value = getElement("price-id");
    const discountValue = value * 0.2;
    const discountValueFixed = discountValue.toFixed(2);
    document.getElementById("discount-id").innerText = discountValueFixed;
    const finalPrice = value - discountValueFixed;
    document.getElementById("total-id").innerText = finalPrice.toFixed(2);
    return discountValueFixed;
  } else alert("wrong coupon code");
}

function getElement(id) {
  const valueString = document.getElementById(id).innerText;
  const value = parseFloat(valueString);
  return value;
}
function purchase() {
  const totalPrice = getElement("price-id");
  console.log(totalPrice);
}
function homeId() {
  document.getElementById("discount-id").innerText = "0";
  document.getElementById("price-id").innerText = "0";
  document.getElementById("total-id").innerText = "0";
  document.getElementById("coupon-id").value = "";
  document.getElementById("place-here").innerHTML = " ";
  window.location.reload();
}
