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
  // const price = document.getElementById("price-id");
  // price.innerText = total;
  // const p = document.createElement("p");
  // const count = price.childElementCount;
  // p.innerHTML = `${count + 1}. ${productName}`;
  // // li.innerText = productName;
  // const placeToKeep = document.getElementById("place-here");
  // placeToKeep.appendChild(p);
  // return productPrice.toFixed(2);
}

function addToPrice(productName, value) {
  const price = document.getElementById("price-id");
  const price1 = price.parentNode.childNodes[1];

  price.innerText = value;
  const p = document.createElement("p");
  // const count = price1.childElementCount;
  count++;

  p.innerHTML = `${count}. ${productName}`;
  // li.innerText = productName;
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
  } else alert("wrong coupon code");
}

//get innerText value
function getElement(id) {
  const valueString = document.getElementById(id).innerText;
  const value = parseFloat(valueString);
  return value;
}
function purchase() {
  const totalPrice = getElement("price-id");
  console.log(totalPrice);
  // if (totalPrice > 0) {
  //   // console.log(totalPrice);
  //   button2.disabled = false;
  // } else button2.disabled = true;
}
