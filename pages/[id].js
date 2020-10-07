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
    cookie.set('orderCookie', [...props.orderCookie, productAmmount]);
  }

  return (
    <Layout>
      <Head>
        <title>{coffee.name}</title>
      </Head>

      <div className="productContainer">
        <container>
          <div>
            <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
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
            <div>
              <span>{coffee.price}$/100g</span>
              <Link href="/payment">
                <a>
                  <button onClick={toggleCookieState}>
                    ADD to Shopping Card
                  </button>
                </a>
              </Link>
              <input
                ref={productAmmountRef}
                type="number"
                placeholder="Amount"
              />
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
export function dhdhd() {}
// function addPricesTogether() {
//   let priceArray = addCoffee.map((itemPrice) => {
//     return itemPrice.price;
//   });

//   let sumOfPrices = priceArray.reduce((a, b) => a + b, 0);
//   setTotalPrice(sumOfPrices);
// }
