import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <div className="LandingPageBackground"></div>
      <div className="MarktingSlogan">
        <p
          style={{
            fontSize: '120%',
            textAlign: 'center',
            color: 'rgba(12, 12, 12, 0.50)',
          }}
        >
          | Low on coffee? |
        </p>
        <h1>FIX IT NOW!</h1>
        <p>
          CoffeeScript will supply you with coffee which not only tasted amazing
          but also is ethically sourced and organically grown!
        </p>
      </div>

      <section>
        <container className="gridcontainer">
          <div className="grid1">
            <Link href="/1">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Light Roast Coffee<br></br>
                      3,50$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="grid2">
            <Link href="/2">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Dark Roast Coffee<br></br>
                      2,90$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid3">
            <Link href="/3">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Medium Roast Coffee<br></br>
                      3,80$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid4">
            <Link href="/4">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Columbian Coffee<br></br>
                      3,20$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid5">
            <Link href="/5">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Brazilian Coffee<br></br>
                      3,10$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid6">
            <Link href="/6">
              <a>
                <div className="gridItemContainer">
                  <img src="coffe-bag-undedited.jpg" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>
                      Decaf Coffee<br></br>
                      4,50$/100g
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </container>
      </section>
    </Layout>
  );
}
