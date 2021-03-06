/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable eqeqeq */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import React, { useState } from 'react';
import { handleDelete } from '../util/deleteCookie';
import { sumPrice } from '../util/sumFunction';
import nextCookies from 'next-cookies';

export let textArray = 0;

export default function User(props) {
  const [orderCookie, setOrderCookie] = useState(props.orderCookie);

  const coffeeTypesPlusAmount = orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...props.coffeeTypes.find(
      (coffeeType) => coffeeType.id === orderCookieObject.id,
    ),
  }));

  const totalPrice = sumPrice(coffeeTypesPlusAmount);

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
              {coffeeTypesPlusAmount.map((coffee) => {
                return coffee.amount == 0 ? null : (
                  <div key={coffee.id} className="table"  >
                    <img
                      src="/delete.svg"
                      alt="delete Button"
                      onClick={() => {
                        const newCookie = handleDelete(
                          coffee.id,
                          orderCookie,
                          setOrderCookie,
                          coffeeTypesPlusAmount,
                        );
                        setOrderCookie(newCookie);
                      }}
                      data-cy={coffee.id+"delete"}
                    />
                    <p>{coffee.amount + '00g ' + coffee.name}</p>

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
                  <p>{totalPrice.toFixed(2)} $</p>
                </div>
              </div>
            </div>
          </div>
          <div className="paymentContainerButton">
            <br />

            <Link href="/checkout">
              <a>
                <button data-cy="go-to-checkout-button">Checkout</button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button className="leftButton">Go Back</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { getCoffees } = await import('../util/coffeeTypes');
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
