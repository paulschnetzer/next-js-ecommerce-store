import Head from 'next/head';
import Layout from '../components/Layout';
import { coffeTypes } from '../util/coffeTypes';
import Link from 'next/link';

export default function User(props) {
  const coffee = coffeTypes.find((currentcoffee) => {
    if (currentcoffee.id === props.id) {
      return true;
    }

    return false;
  });

  return (
    <>
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
                    <button>ADD to Shopping Card</button>
                  </a>
                </Link>
              </div>
            </div>
          </container>
        </div>
      </Layout>
    </>
  );
}

// This is run by Next.js BEFORE the component
// above is run, and passes in the props
export function getServerSideProps(context) {
  // context = {
  //   query: { id: '1' },
  //   params: { id: '1' },
  // }
  return {
    props: { id: context.query.id },
  };
}
