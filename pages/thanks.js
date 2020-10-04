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

        <div className="thanksContainer">
          <container>
            <Link href="/">
              <a>
                <button>Go Back</button>
              </a>
            </Link>
            <div>
              <h1>Thank you for your order!</h1>
              <p>
                The coffee is now on the way to your mug. <br />
              </p>
              <p>
                You also just recieved an E-Mail with all the the nececcary
                information
                <br /> regarding shipping and payment.
              </p>
            </div>
          </container>
        </div>
      </Layout>
    </>
  );
}
