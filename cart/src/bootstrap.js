import faker from "faker";
const mount = (el) => {
  const cartText = `<div>${faker.random.number()} items in your cart</div>
  <strong>Generated with "faker": "^5.0.0"</strong>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const cardDom = document.querySelector("#isolated-dev-cart");
  if (cardDom) {
    mount(cardDom);
  }
}

export { mount };
