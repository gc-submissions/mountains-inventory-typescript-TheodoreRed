import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

export const calcInventoryValue = (inventoryArray: InventoryItem[]): number => {
  if (inventoryArray.length === 0) return 0;
  let value = 0;
  inventoryArray.forEach((item) => {
    value += item.product.price * item.quantity;
  });
  return value;
};
