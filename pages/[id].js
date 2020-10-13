import Head from 'next/head';
import Layout from '../components/Layout';

import Link from 'next/link';
import cookie from 'js-cookie';
import React, { useRef } from 'react';
import nextCookies from 'next-cookies';

export default function User(props) {
  const coffee = props.coffeeTypes.find((currentcoffee) => {
    if (currentcoffee.id.toString() === props.id) {
      return true;
    }

    return false;
  });

  const productAmountRef = useRef();
  function toggleCookieState() {
    const coffeeInput = {
      id: coffee.id,
      amount: productAmountRef.current.value,
    };
    if (props.orderCookie.length === 0) {
      cookie.set('orderCookie', [coffeeInput]);
    } else {
      const idExists = props.orderCookie.some(
        (item) => item.id === coffeeInput.id,
      );
      if (idExists) {
        const preFilter = props.orderCookie.filter((item) =>
          item.id === coffeeInput.id
            ? (item.amount = coffeeInput.amount) // change this into a non filter method
            : console.log('nice'),
        );
        const finalArray = props.orderCookie.map(
          (item) =>
            preFilter.find((preFilterItem) => preFilterItem.id === item.id) ||
            item,
        );
        cookie.set('orderCookie', finalArray);
      } else {
        cookie.set('orderCookie', [...props.orderCookie, coffeeInput]);
      }
    }
    console.log(props.orderCookie);
  }
  return (
    <Layout>
      <Head>
        <title>{coffee.name}</title>
      </Head>

      <div className="productContainer">
        <container>
          <div>
            <img src={coffee.image} alt="Logo" />
          </div>
          <div className="productContainerText">
            <h1>{coffee.name}</h1>
            <p>
              Hello fellow Customer! Thank you for Choosing the {coffee.name}.
              This Coffe is made with the finest techniques and convinces with
              great flavor and an irresisteble smell. <br />
              Perfect for starting an amazing day or haveing a great afternoon
              with you friends.
            </p>
            <div className="AmountButton">
              <span>
                <p>{coffee.price}0$/100g</p>
                <div>
                  Quantity:
                  <input
                    ref={productAmountRef}
                    type="number"
                    defaultValue="1"
                    min="1"
                  />
                </div>
              </span>
              <Link href="/payment">
                <a>
                  <button onClick={toggleCookieState}>
                    ADD to Shopping Card
                  </button>
                </a>
              </Link>
            </div>
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
      id: context.query.id,
      orderCookie: orderCookie,
      coffeeTypes: coffeeTypes,
    },
  };
}
