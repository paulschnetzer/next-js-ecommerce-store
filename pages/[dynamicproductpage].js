import Head from 'next/head';
import Layout from '../components/Layout';
import { toggleCookieState } from '../util/toggleCookieState';
import Link from 'next/link';
import React, { useState } from 'react';
import nextCookies from 'next-cookies';

export default function ProductPage(props) {
  //Makes the ProduuctPages dynamic
  const pageCoffee = props.coffeeTypes.find((currentcoffee) => {
    if (currentcoffee.id.toString() === props.id) {
      return true;
    }
    return false;
  });

  //A controlled Component that takes care of the CoffeeAmount
  const [amountofCoffee, setAmountofCoffee] = useState(1);
  const coffeeInput = {
    id: pageCoffee.id,
    amount: parseInt(amountofCoffee),
  };

  return (
    <Layout>
      <Head>
        <title>{pageCoffee.name}</title>
      </Head>

      <div className="productContainer">
        <div className="container">
          <div>
            <img src={pageCoffee.image} alt="Logo" />
          </div>
          <div className="productContainerText">
            <h1>{pageCoffee.name}</h1>
            <p>
              Hello fellow Customer! Thank you for Choosing the {pageCoffee.name}.
              This Coffe is made with the finest techniques and convinces with
              great flavor and an irresisteble smell. <br />
              Perfect for starting an amazing day or haveing a great afternoon
              with you friends.
            </p>
            <div className="AmountButton">
              <span>
                <p>{pageCoffee.price}0$/100g</p>
                <div>
                  Quantity:
                  <input
                    onChange={(e) => setAmountofCoffee(e.target.value)}
                    type="number"
                    min="1"
                    value={amountofCoffee}
                  />
                </div>
              </span>
              <Link href="/payment">
                <a>
                  <button onClick={() => toggleCookieState(props.orderCookie, coffeeInput)}>
                    Add to Card
                  </button>
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
  const { getCoffees } = await import('../util/coffeeTypes');
  const coffeeTypes = await getCoffees();
  const allCookies = nextCookies(context);
  const orderCookie = allCookies.orderCookie || [];
  return {
    props: {
      id: context.query.dynamicproductpage,
      orderCookie: orderCookie,
      coffeeTypes: coffeeTypes,
    },
  };
}
