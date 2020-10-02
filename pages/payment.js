import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function User() {
  return (
    <>
      <Layout>
        <Head>
          <title>Payment</title>
        </Head>

        <div className="paymentContainer">
          <container>
            <div>
              <div className="paymentContainerLeft">
                <div className="paymentContainerLeftList">
                  <p>Product 1</p>
                  <p>Product 1</p>
                  <p>Product 1</p>
                </div>
                <div className="paymentContainerLeftList">
                  <p>price</p>
                  <p>price</p>
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
            </div>
            <div classname="paymentContainerButton">
              <Link href="/">
                <a>
                  <button>Go Back</button>
                  <br />
                </a>
              </Link>
              <Link href="/checkout">
                <a>
                  <button>Go to Checkout</button>
                </a>
              </Link>
            </div>
          </container>
        </div>
      </Layout>
    </>
  );
}
