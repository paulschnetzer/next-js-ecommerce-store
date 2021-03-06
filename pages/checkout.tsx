/* eslint-disable jsx-a11y/accessible-emoji */
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import { GetServerSidePropsContext } from 'next';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { sumPrice } from '../util/sumFunction';

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

  const totalPrice = sumPrice(coffeeTypesPlusAmount);

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
                  data-cy="login-first-name"
                  pattern="[a-zA-Z]+"
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
                  data-cy="login-last-name"
                  pattern="[a-zA-Z]+"
                />
                {errors.secondname && (
                  <p className="InputError">❌Second Name is required❌</p>
                )}
                <input
                  type="input"
                  className="form__field"
                  placeholder="Adress"
                  name="address"
                  id="address"
                  ref={register({ required: true })}
                  data-cy="login-adress"
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
                  data-cy="login-email"
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
                  data-cy="login-number"
                />
                {errors.number && (
                  <p className="InputError">❌Phone Number is required❌</p>
                )}
                <h1>Payment</h1>
                <input
                  type="text"
                  className="form__field"
                  placeholder="Full Name"
                  name="fname"
                  id="fname"
                  ref={register({ required: true })}
                  data-cy="login-full-name"
                  pattern="^[a-zA-Z\s]*$"
                />
                {errors.fname && (
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
                  data-cy="login-card-number"
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
                  data-cy="login-expirationdate"
                />
                {errors.expirationdate && (
                  <p className="InputError">❌Expiration date is required❌</p>
                )}
                <input type="submit" value="Sign In" data-cy="login-Submit"/>
              </form>
            </div>
          </div>
          <div className="checkoutContainerPrice">
            <div>
              {userValidation ? (
                <>
                  <DisplayOrder
                    coffeeTypesPlusAmount={coffeeTypesPlusAmount}
                    sumPrice={totalPrice}
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
          <button data-cy="buy-button">BUY NOW</button>
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
