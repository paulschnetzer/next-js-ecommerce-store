import cookie from 'js-cookie';

export function handleDelete(id, orderCookie) {
  const reducedCookie = orderCookie.filter(
    (deletedcoffee) => deletedcoffee.id !== id,
  );
  cookie.set('orderCookie', reducedCookie);

  return reducedCookie;
}
