import { sumPrice } from '../sumFunction';

const coffeTypesPlusAmountState = [
  {
    id: 1,
    name: 'Columbia Tolima',
    price: 3.5,
    image: 'coffee1.png',
    amount: 5,
  },
  {
    id: 2,
    name: 'Columbia Ruiz',
    price: 2.9,
    image: 'coffee2.png',
    amount: 3,
  },
  {
    id: 3,
    name: 'Columbia Castillo',
    price: 3.8,
    image: 'coffee3.png',
    amount: 9,
  },
];
//3,5*5 + 2,9*3 + 3,8*9="60,40"
test('summ of all the Products prices* amount', () => {
  let totalPrice = sumPrice(coffeTypesPlusAmountState);
  totalPrice = totalPrice.toFixed(2);
  expect(totalPrice).toBe('60.40');
});
