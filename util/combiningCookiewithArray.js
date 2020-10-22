
export default function coffeTypesPlusAmount(orderCookie, coffeeTypes) { orderCookie.reduce(
  (reducer, currentCookieObject) => {
    const matchingCoffeeType = coffeeTypes.find(
      (coffeeType) => coffeeType.id === currentCookieObject.id,
    );

    if (reducer) {
      coffeeTypes.push({ ...currentCookieObject, ...matchingCoffeeType });
    }

    return coffeeTypes;
  },
  [],
)}