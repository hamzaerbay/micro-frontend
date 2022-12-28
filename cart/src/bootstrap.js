import faker from "faker";
const cartText = `<div>${faker.random.number()} items in your cart</div>
<strong>Generated with "faker": "^4.1.0"</strong>`;

document.querySelector("#dev-cart").innerHTML = cartText;
