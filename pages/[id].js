import Head from 'next/head';
import Layout from '../components/Layout';
import { coffeeTypes } from '../util/coffeTypes';
import Link from 'next/link';
import cookie from 'js-cookie';
import React, { useRef } from 'react';
import nextCookies from 'next-cookies';

export default function User(props) {
  const coffee = coffeeTypes.find((currentcoffee) => {
    if (currentcoffee.id === props.id) {
      return true;
    }

    return false;
  });

  const productAmmountRef = useRef();
  function toggleCookieState() {
    const productAmmount = {
      id: coffee.id,
      amount: productAmmountRef.current.value,
    };
    if (props.orderCookie.length === 0) {
      cookie.set('orderCookie', [...props.orderCookie, productAmmount]);
    } else {
      const idExists = props.orderCookie.some(
        (item) => item.id === productAmmount.id,
      );
      if (idExists) {
        const preFilter = props.orderCookie.filter((user) =>
          user.id === productAmmount.id
            ? (user.amount = productAmmount.amount)
            : console.log('nice'),
        );
        const finalArray = props.orderCookie.map(
          (obj) => preFilter.find((o) => o.id === obj.id) || obj,
        );
        cookie.set('orderCookie', finalArray);
      } else {
        cookie.set('orderCookie', [...props.orderCookie, productAmmount]);
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
                    ref={productAmmountRef}
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

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const orderCookie = allCookies.orderCookie || [];
  return {
    props: { id: context.query.id, orderCookie: orderCookie },
  };
}
