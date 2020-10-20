import { handleDelete } from '../deleteCookie';

const id = 1;
const orderCookie = [
  { id: 1, amount: 5 },
  { id: 2, amount: 5 },
  { id: 5, amount: 5 },
];
test('delete if the delted obejct is the right one', () => {
  const newCookie = handleDelete(id, orderCookie);
  expect(newCookie.length).toBe(2);
  expect(newCookie.some((item) => item.id !== id)).toBe(true);
});
