import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function User() {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="checkoutContainer">
        <container>
          <div>
            <div class="Shipping">
              <h1>Shipping</h1>
              <input
                type="input"
                class="form__field"
                placeholder="First Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="Second Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="Adress"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="E-Mail"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="Phone-Number"
                name="name"
                id="name"
              />
              <h1>Payment</h1>
              <input
                type="input"
                class="form__field"
                placeholder="Full Name"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="Card Number"
                name="name"
                id="name"
              />
              <input
                type="input"
                class="form__field"
                placeholder="Expiration Date"
                name="name"
                id="name"
              />
            </div>
          </div>
          <div className="checkoutContainerPrice">
            <div>
              <p className="checkoutContainerPriceProduct">Product1</p>
              <p>3,21</p>
            </div>
            <div>
              <p className="checkoutContainerPriceProduct">Product1</p>
              <p>3,21</p>
            </div>
            <div>
              <p className="checkoutContainerPriceProduct">Product1</p>
              <p>3,21</p>
            </div>
            <div className="h_line"></div>
            <div>
              <p className="checkoutContainerTotalProduct">Total Price</p>
              <p>31,21</p>
            </div>
            <div>
              <Link href="/thanks">
                <a>
                  <button>BUY NOW</button>
                </a>
              </Link>
            </div>
          </div>
        </container>
      </div>
    </Layout>
  );
}
