import faker from "faker";
const mount = (el) => {
  const cartText = `<div>${faker.random.number()} items in your cart</div>
  <strong>Generated with "faker": "^5.0.0"</strong>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
    /* 
    https://webpack.js.org/configuration/mode/#mode-development
    webpack.config =>   mode: "development",
    Purpose of #isolated-dev-cart is only used by the product app itself,
     not in the outer apps (Container)
  */
  const cartDom = document.querySelector("#isolated-dev-cart");
  if (cartDom) {
    mount(cartDom);
  }
}

export { mount };
