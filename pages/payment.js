/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable eqeqeq */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import React, { useState } from 'react';

import nextCookies from 'next-cookies';
import cookie from 'js-cookie';

export let textArray = 0;

export default function User(props) {
  const [orderCookie, setOrderCookie] = useState(props.orderCookie);
  const coffeTypesPlusAmount = orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...props.coffeeTypes.find(
      (coffeType) => coffeType.id === orderCookieObject.id,
    ),
  }));

  const [coffeTypesPlusAmountState, setCoffeTypesPlusAmountState] = useState(
    coffeTypesPlusAmount,
  );

  function handleDelete(id) {
    const reducedCookie = orderCookie.filter(
      (deletedcoffee) => deletedcoffee.id !== id,
    );
    cookie.set('orderCookie', reducedCookie);
    setOrderCookie(reducedCookie);

    const reducedCoffee = coffeTypesPlusAmount.filter(
      (deletedcookie) => deletedcookie.id !== id,
    );
    setCoffeTypesPlusAmountState(reducedCoffee);
  }

  const sumPrice = coffeTypesPlusAmountState
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
  textArray = orderCookie.length;

  return (
    <Layout>
      <Head>
        <title>Payment</title>
      </Head>

      <div className="paymentContainer">
        <div className="container">
          <div className="paymentContainerLeft">
            <div className="paymentContainerLeftList">
              {coffeTypesPlusAmountState.map((coffee) => {
                return coffee.amount == 0 ? null : (
                  <div key={coffee.id} className="table">
                    <img
                      src="/delete.svg"
                      alt="delete Button"
                      height="25"
                      onClick={() => handleDelete(coffee.id)}
                    />
                    <p>{coffee.amount + ' x ' + coffee.name}</p>

                    {(coffee.price * coffee.amount).toFixed(2) + ' $'}
                  </div>
                );
              })}
              <div className="h_line"></div>
              <div className="tablebottom">
                <div>
                  <h4>Total Price</h4>
                </div>
                <div>
                  <p>{sumPrice.toFixed(2)} $</p>
                </div>
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
