/*
    De La Salle University – Dasmariñas
    S-CSPC223LA — Programming Languages (Laboratory)
    Midterm Laboratory Exam

    Luis Anton P. Imperial
    BCS22

    Monday, March 11, 2024
*/

"use strict";

/* Given. */
let items = [
    {
    product: "Nutella",
    quantity: 3,
    price: 500
    },
    {
    product: "Gummy Bears",
    quantity: 4,
    price: 100
    }
];

/*  Create function to avoid repetition of prompt() method
    and add way of sanitizing certain data types.
*/
function askForProductDetail(type) {
    let detail;

    switch (type) {
        case 'product':
            detail = prompt("What new product do you wish to enter?");
            return detail;
        case 'quantity':
            detail = Number(prompt("How many of this item is available?"));
            return detail;
        case 'price':
            detail = Number(prompt("How much does this item cost?"));
            return detail;
    }
}

/* Ask for new items' details and place them in temp array */
let items_ordered = 2;
let new_items = [];
for(let i = 0; i < items_ordered; i++) {
    let new_item_added = {};

    new_item_added.product = askForProductDetail("product");
    new_item_added.quantity = askForProductDetail("quantity");
    new_item_added.price = askForProductDetail("price");

    new_items.push(new_item_added);
}

/* Push all new items into the overall items array */
for(let i = 0; i < new_items.length; i++) {
    items.push(new_items[i]);
};

/*  Compute subtotal for each item; equation is: quantity × price.
    Also compute the overall total for all items ordered.
*/
let itemsTotalOverall = 0;

for(let i = 0; i < items.length; i++) {
    items[i].total = items[i].quantity * items[i].price;

    itemsTotalOverall += items[i].total;
}

/* Print the heading for pseudo-table, and for each item we have */
let itemsDisplayHeading = "PRODUCT        / QUANTITY        / PRICE        / TOTAL";
let itemsDisplayed = [];
let itemsTotalHeading = "Total Amount Due:";

for(let i = 0; i < items.length; i++) {
    let product = items[i].product.padEnd(12);
    let quantity = items[i].quantity.toString().padStart(3);
    let price = items[i].price.toString().padStart(6);
    let total = items[i].total.toString().padStart(5);

    itemsDisplayed[i] = `${product} / ${quantity} / ${price} / ${total}`;
}

alert(`
${itemsDisplayHeading}\n
${itemsDisplayed.join("\n")}\n
${itemsTotalHeading} ${itemsTotalOverall}`);