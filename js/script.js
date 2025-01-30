"use strict";

let subtotal = 200;
let discount = 10;
let shipping = 45;

subtotal -= discount;

let total = (subtotal + shipping);

document.getElementById("subtotal").textContent = `${subtotal}`;
document.getElementById("shipping").textContent = `${shipping}`;
document.getElementById("total").textContent = `${total}`;

console.log(total);