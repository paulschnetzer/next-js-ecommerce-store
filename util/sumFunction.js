export function sumPrice(coffeeTypesPlusAmountState) {
  return coffeeTypesPlusAmountState
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
}
