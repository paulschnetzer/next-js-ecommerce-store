import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <div className="LandingPageBackground">
        <div className="MarktingSlogan">
          <p
            style={{
              fontSize: '110%',
              textAlign: 'center',
              color: 'rgba(12, 12, 12, 0.50)',
            }}
          >
            | Low on coffee? |
          </p>
          <h1>FIX IT NOW!</h1>

          <p>
            CoffeeScript will supply you with coffee which not only tasted
            amazing but also is ethically sourced and organically grown!
          </p>
        </div>
      </div>

      <section>
        <div className="gridcontainer">
          <div className="item">
            <Link href="/1">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee1.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Tolima</p>
                    <p className="gridFontPrice">3,50$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="item">
            <Link href="/2">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee2.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Ruiz</p>
                    <p className="gridFontPrice">2,90$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="item">
            <Link href="/3">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee3.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Castillo </p>
                    <p className="gridFontPrice"> 3,80$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="item">
            <Link href="/4">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee4.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Ethopian Shakiso</p>

                    <p className="gridFontPrice">3,20$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="item">
            <Link href="/5">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee5.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>House Blend</p>
                    <p className="gridFontPrice">3,10$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="item">
            <Link href="/6">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee6.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Guatemala Nango</p>
                    <p className="gridFontPrice">4,50$/100g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
