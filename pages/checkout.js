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

        <div className="checkoutContainer">
          <container></container>
        </div>
      </Layout>
    </>
  );
}
