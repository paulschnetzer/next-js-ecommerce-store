import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import nextCookies from 'next-cookies';

export default function User(props) {
  const coffeTypesPlusAmount = props.orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...props.coffeeTypes.find(
      (coffeType) => coffeType.id === orderCookieObject.id,
    ),
  }));

  const sumPrice = coffeTypesPlusAmount
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(props.coffeeTypes);

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="checkoutContainer">
        <div className="container">
          <div>
            <div className="Shipping">
              <h1>Shipping</h1>
              <input
                type="input"
                className="form__field"
                placeholder="First Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="Second Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="Adress"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="E-Mail"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="Phone-Number"
                name="name"
                id="name"
              />
              <h1>Payment</h1>
              <input
                type="input"
                className="form__field"
                placeholder="Full Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="Card Number"
                name="name"
                id="name"
              />
              <input
                type="input"
                className="form__field"
                placeholder="Expiration Date"
                name="name"
                id="name"
              />
            </div>
          </div>
          <div className="checkoutContainerPrice">
            {coffeTypesPlusAmount.map((coffee) => {
              return coffee.amount === 0 ? null : (
                <div key={coffee.id} className="table">
                  {coffee.amount + ' x ' + coffee.name}

                  <p>{(coffee.price * coffee.amount).toFixed(2) + ' $'}</p>
                </div>
              );
            })}
            <div className="h_line"></div>
            <div className="table">
              <h4>Total Price</h4>
              <p>{sumPrice.toFixed(2)} $</p>
            </div>

            <div>
              <Link href="/thanks">
                <a>
                  <button>BUY NOW</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { getCoffees } = await import('../util/coffeTypes');
  const coffeeTypes = await getCoffees();

  const allCookies = nextCookies(context);
  const orderCookie = allCookies.orderCookie || [];
  return {
    props: {
      orderCookie: orderCookie,
      coffeeTypes,
    },
  };
}
