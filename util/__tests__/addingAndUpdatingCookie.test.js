import { toggleCookieState } from '../toggleCookieState';
import cookie from 'js-cookie';

//###########Setup############
const coffeeInput = { id: 4, amount: 55 };

//###########FIRST TEST############

cookie.set('orderCookie', [{ id: 22, amount: 66 }]);
const beforeCookie = cookie.getJSON('orderCookie') ||[];


test('adding a new product into the cookie', () => {
  toggleCookieState(beforeCookie, coffeeInput)
  const afterCookie = cookie.getJSON('orderCookie') || [];
  expect(afterCookie.length).toBe(2);
  expect(afterCookie.some((item) => item.id === 22||4)).toBe(true);
  expect(afterCookie.some((item) => item.amount === 55||66)).toBe(true);
});
cookie.remove('orderCookie');


//###########Second Test############
cookie.set('orderCookie',[]);
const beforeCookie2 = cookie.getJSON('orderCookie') ||[];


test('adding a new product into the empty cookie', () => {
  toggleCookieState(beforeCookie2, coffeeInput)
  const afterCookie = cookie.getJSON('orderCookie') || [];
  expect(afterCookie.length).toBe(1);
  expect(afterCookie.some((item) => item.id === 4||item.amount===55)).toBe(true);
  const objectInCookie=afterCookie.pop()
  expect(objectInCookie).toMatchObject(coffeeInput)

});
cookie.remove('orderCookie');
//###########Third Test############

cookie.set('orderCookie', [{ id: 4, amount: 22 }]);
const beforeCookie3 = cookie.getJSON('orderCookie') ||[];


test('adding an already existing product into the cookie', () => {
  toggleCookieState(beforeCookie3, coffeeInput)
  const afterCookie = cookie.getJSON('orderCookie') || [];
  expect(afterCookie.length).toBe(1);
});
cookie.remove('orderCookie');