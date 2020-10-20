/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import { GetServerSidePropsContext } from 'next';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

type OrderCookieObject = {
  id: number;
  amount: number;
};
type CoffeeType = {
  id: number;
  name: string;
  price: number;
  image: string;
};
type Item = {
  id: number;
  amount: number;
  name: string;
  price: number;
  image: string;
};
type PropsforCheckout = {
  coffeeTypes: CoffeeType[];
  orderCookie: OrderCookieObject[];
};
type PropsforDisplayOrder = {
  coffeeTypesPlusAmount: Item[];
  sumPrice: number;
};
type Data = {
  address: string;
  cardnumber: string;
  email: string;
  expirationdate: string;
  name: string;
  number: string;
  secondname: string;
};

export default function Checkout(props: PropsforCheckout) {
  // const filteredCookies = props.orderCookie.filter((orderCookieObject) =>
  //   props.coffeeTypes.some(
  //     (coffeeType) => coffeeType.id === orderCookieObject.id,
  //   ),
  // );
  // const coffeeTypesPlusAmount = filteredCookies.map(
  //   (orderCookieObject: OrderCookieObject) => ({
  //     ...orderCookieObject,
  //     ...props.coffeeTypes.find(
  //       (coffeeType: CoffeeType) => coffeeType.id === orderCookieObject.id,
  //     ),
  //   }),
  // );
  //This  does the same thing as the two methods up there but Typescript doesnt like it for some reason
  const coffeeTypesPlusAmount = props.orderCookie.reduce(
    (coffeeTypes: Item[], currentCookieObject) => {
      const matchingCoffeeType = props.coffeeTypes.find(
        (coffeeType: CoffeeType) => coffeeType.id === currentCookieObject.id,
      );

      if (matchingCoffeeType) {
        coffeeTypes.push({ ...currentCookieObject, ...matchingCoffeeType });
      }

      return coffeeTypes;
    },
    [],
  );

  const sumPrice = coffeeTypesPlusAmount
    .map((item: Item) => item.price * item.amount)
    .reduce((prev: number, curr: number) => prev + curr, 0);
  const { register, handleSubmit, errors } = useForm();
  const [userValidation, setuserValidation] = useState(false);
  const onSubmit = (data: Data) => {
    data ? setuserValidation(true) : setuserValidation(false);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form__field"
                  placeholder="First Name"
                  name="name"
                  id="name"
                  ref={register({ required: true })}
                />
                {errors.name && (
                  <p className="InputError">❌First Name is required❌</p>
                )}
                <input
                  type="text"
                  className="form__field"
                  placeholder="Second Name"
                  name="secondname"
                  id="secondname"
                  ref={register({ required: true })}
                />
                {errors.secondname && (
                  <p className="InputError">Second Name is required❌</p>
                )}
                <input
                  type="input"
                  className="form__field"
                  placeholder="Adress"
                  name="address"
                  id="address"
                  ref={register({ required: true })}
                />
                {errors.address && (
                  <p className="InputError">❌Address is required❌</p>
                )}
                <input
                  type="email"
                  className="form__field"
                  placeholder="E-Mail"
                  name="email"
                  id="email"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <p className="InputError">❌E-Mail is required❌</p>
                )}
                <input
                  type="tel"
                  className="form__field"
                  placeholder="Phone-Number"
                  name="number"
                  id="number"
                  pattern="(((\+43)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}"
                  ref={register({ required: true })}
                />
                {errors.number && (
                  <p className="InputError">❌Phone Number is required❌</p>
                )}
                <h1>Payment</h1>
                <input
                  type="text"
                  className="form__field"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  ref={register({ required: true })}
                />
                {errors.name && (
                  <p className="InputError">❌Name is required❌</p>
                )}
                <input
                  type="input"
                  className="form__field"
                  placeholder="Card Number| e.g. AT942060416724331323"
                  name="cardnumber"
                  id="cardnumber"
                  pattern="
                  AT\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|AT\d{18}"
                  ref={register({ required: true })}
                />
                {errors.cardnumber && (
                  <p className="InputError">❌Card Number is required❌</p>
                )}
                <input
                  type="input"
                  className="form__field"
                  placeholder="Expiration Date | e.g. 02/24"
                  name="expirationdate"
                  id="expirationdate"
                  pattern="^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)"
                  ref={register({ required: true })}
                />
                {errors.expirationdate && (
                  <p className="InputError">❌Expiration date is required❌</p>
                )}
                <input type="submit" value="Sign In" />
              </form>
            </div>
          </div>
          <div className="checkoutContainerPrice">
            <div>
              {userValidation ? (
                <>
                  <DisplayOrder
                    coffeeTypesPlusAmount={coffeeTypesPlusAmount}
                    sumPrice={sumPrice}
                  />
                  <BuyButton />
                </>
              ) : (
                <h1>Please Sign in to continue!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function BuyButton() {
  return (
    <div>
      <Link href="/thanks">
        <a>
          <button>BUY NOW</button>
        </a>
      </Link>
    </div>
  );
}

function DisplayOrder(props: PropsforDisplayOrder) {
  return (
    <div>
      {props.coffeeTypesPlusAmount.map((coffee: Item) => {
        return (
          <div key={coffee.id} className="table">
            <div>
              <p>{coffee.amount + ' x ' + coffee.name}</p>
            </div>

            <div>
              <p className="alignRight">
                {(coffee.price * coffee.amount).toFixed(2) + ' $'}
              </p>
            </div>
          </div>
        );
      })}
      <div className="h_line"></div>
      <div className="table">
        <div>
          <h4>Total Price</h4>
        </div>
        <div>
          <p>{props.sumPrice.toFixed(2)} $</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
