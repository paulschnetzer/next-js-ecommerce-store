export function sumPrice(coffeTypesPlusAmountState) {
  return coffeTypesPlusAmountState
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
}
