/* eslint-disable eqeqeq */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

import { coffeeTypes } from '../util/coffeTypes';
import nextCookies from 'next-cookies';

export let textArray = 0;

export default function User(props) {
  const coffeTypesPlusAmount = props.orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...coffeeTypes.find((coffeType) => coffeType.id === orderCookieObject.id),
  }));

  const sumPrice = coffeTypesPlusAmount
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
  textArray = props.orderCookie.length;

  return (
    <Layout>
      <Head>
        <title>Payment</title>
      </Head>

      <div className="paymentContainer">
        <container>
          <div className="paymentContainerLeft">
            <div className="paymentContainerLeftList">
              {coffeTypesPlusAmount.map((coffee) => {
                return (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {coffee.amount == 0 ? (
                      ''
                    ) : (
                      <div key={coffee.id} className="table">
                        {coffee.amount + ' x ' + coffee.name}

                        <p>
                          {(coffee.price * coffee.amount).toFixed(2) + ' $'}
                        </p>
                      </div>
                    )}
                  </>
                );
              })}
              <div className="h_line"></div>
              <div className="table">
                <h4>Total Price</h4>
                <p>{sumPrice.toFixed(2)} $</p>
              </div>
            </div>
          </div>
          <div className="paymentContainerButton">
            <br />

            <Link href="/checkout">
              <a>
                <button>Go to Checkout</button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button>Continue Shopping</button>
              </a>
            </Link>
          </div>
        </container>
      </div>
    </Layout>
  );
}
export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const orderCookie = allCookies.orderCookie || [];
  return {
    props: {
      orderCookie: orderCookie,
    },
  };
}
