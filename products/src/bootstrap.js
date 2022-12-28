import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
products += '<strong>Generated with "faker": "^5.1.0" </strong>';

document.querySelector("#dev-products").innerHTML = products;
