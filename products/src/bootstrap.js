import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  products += '<strong>Generated with "faker": "^5.1.0" </strong>';

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  /* 
    https://webpack.js.org/configuration/mode/#mode-development
    webpack.config =>   mode: "development",
    Purpose of #isolated-dev-products is only used by the product app itself, not in the outer apps (Container)
  */
  const productDOM = document.querySelector("#isolated-dev-products");
  if (productDOM) {
    mount(productDOM);
  }
}

export { mount };
