/* eslint-disable eqeqeq */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import nextCookies from 'next-cookies';
import cookies from 'next-cookies';
import cookie from 'js-cookie';

export let textArray = 0;

export default function User(props) {
  // const [loading, setLoading] = useState(false);
  // const [coffeeArray, setcoffeeArray] = useState([]);

  const coffeTypesPlusAmount = props.orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...props.coffeeTypes.find(
      (coffeType) => coffeType.id === orderCookieObject.id,
    ),
  }));

  // useEffect(() => {
  //   setcoffeeArray(coffeTypesPlusAmount);
  // }, [props.orderCookie]);

  const sumPrice = coffeTypesPlusAmount
    .map((item) => item.price * parseInt(item.amount))
    .reduce((prev, curr) => prev + curr, 0);
  textArray = props.orderCookie.length;

  // function handleDelete(dope) {
  //   const deletedArray = props.orderCookie.filter(
  //     (item) => item.id !== dope.id,
  //   );
  //   cookie.set('orderCookie', deletedArray);
  // }

  return (
    <Layout>
      <Head>
        <title>Payment</title>
      </Head>

      <div className="paymentContainer">
        <container>
          <div className="paymentContainerLeft">
            <div className="paymentContainerLeftList">
              {
                /*coffeeArray*/ coffeTypesPlusAmount.map((coffee) => {
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
                          {/* <button
                          style={{ with: 10, fontSize: 10 }}
                          onClick={() => {
                            handleDelete(coffee);
                          }}
                        >
                          Delete
                        </button> */}
                        </div>
                      )}
                    </>
                  );
                })
              }
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
