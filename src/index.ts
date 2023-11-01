import { calcAverageProductPrice, products } from "./products";
import { calcInventoryValue, inventory } from "./inventory";
import { findNameOfTallestMountain, mountains } from "./mountains";

const tallestMountain = findNameOfTallestMountain(mountains);
console.log(`findNameOfTallestMountain(mountains) returns:`, tallestMountain);

const averageProductPrice = calcAverageProductPrice(products);
console.log(`calcAverageProductPrice(products) returns:`, averageProductPrice);

const value = calcInventoryValue(inventory);
console.log(`calcInventoryValue(inventory) returns:`, value);
