import Product from "./models/Product";

export const products: Product[] = [
  { name: "cup", price: 4 },
  { name: "bowl", price: 6 },
  { name: "plate", price: 7 },
];

export const calcAverageProductPrice = (productsArray: Product[]): number => {
  if (productsArray.length === 0) return 0;
  const sum = productsArray.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
  return sum / productsArray.length;
};
