import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';
import { coffeeTypes } from '../util/coffeTypes';
import nextCookies from 'next-cookies';

function BackButton() {
  return <button onClick={() => Router.back()}>Go Back</button>;
}

export default function User(props) {
  const coffeTypesPlusAmount = props.orderCookie.map((orderCookieObject) => ({
    ...orderCookieObject,
    ...coffeeTypes.find((coffeType) => coffeType.id === orderCookieObject.id),
  }));

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

                        <p>{Math.round(coffee.price * coffee.amount) + '$'}</p>
                      </div>
                    )}
                  </>
                );
              })}
              <div className="h_line"></div>
              <div className="table">
                <h4>Total Price</h4>
                <p>50,45$</p>
              </div>
            </div>
          </div>
          <div className="paymentContainerButton">
            {BackButton()}
            <br />

            <Link href="/checkout">
              <a>
                <button>Go to Checkout</button>
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

// eslint-disable-next-line no-lone-blocks
{
  /* <div>
            <div className="paymentContainerLeft">
              <div className="paymentContainerLeftList">
                <p>Product 1</p>
              </div>
              <div className="paymentContainerLeftList">
                <p>price</p>
              </div>
            </div>
            <div className="h_line"></div>
            <div className="paymentContainerTotalPrice">
              <div>
                <h2>Total Price</h2>
              </div>
              <div>
                <p>50,45$</p>
              </div>
            </div>
          </div> */
}
