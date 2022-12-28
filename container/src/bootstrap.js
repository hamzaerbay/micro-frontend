import { mount as productMount } from "products/ProductsIndex";
import {mount as cartMount} from "cart/CartDetail";


productMount(document.querySelector('#render-products'))
cartMount(document.querySelector('#render-cart'))
console.log("HOST: container");
console.log("Remote: products");
console.log("Remote: cart");
