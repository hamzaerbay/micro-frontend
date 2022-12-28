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

/*
  Context #1
  We're running this file in development in isolation
  We're using local index.html file
  Which definetly has an element with an id of "dev-product"
  we want to immediately render our app into that element
*/
if (process.env.NODE_ENV === "development") {
  /* 
    webpack.config =>   mode: "development",
    Purpose of #isolated-dev-products is only used by the product app itself, not in the outer apps
  */
  const el = document.querySelector("#isolated-dev-products");
  if (el) {
    mount(el);
  }
}

/*
   Context #2
   We're running this file in dev or prod through the container app
   No guarantee that an element with an id of "dev-product"
   we dont want to try immediately render app
*/
export { mount };
