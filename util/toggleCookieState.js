import cookie from 'js-cookie';

export function toggleCookieState(orderCookie, coffeeInput) {
  if (orderCookie.length === 0) {
    cookie.set('orderCookie', [coffeeInput]);
    return orderCookie;
  } else {
    const idExists = orderCookie.some((item) => item.id === coffeeInput.id);
    if (idExists) {
      const preFilter = orderCookie.filter((item) =>
        item.id === coffeeInput.id
          ? (item.amount = coffeeInput.amount) // change this into a non filter method
          : console.log('nice'),
      );
      const finalArray = orderCookie.map(
        (item) =>
          preFilter.find((preFilterItem) => preFilterItem.id === item.id) ||
          item,
      );
      cookie.set('orderCookie', finalArray);
      return orderCookie;
    } else {
      cookie.set('orderCookie', [...orderCookie, coffeeInput]);
      return orderCookie;
    }
  }
}
