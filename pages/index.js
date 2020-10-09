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
                  <img src="coffee1.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Tolima</p>
                    <p className="gridFontPrice">24,50$/500g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="grid2">
            <Link href="/2">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee2.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Ruiz</p>
                    <p className="gridFontPrice">22,90$/500g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid3">
            <Link href="/3">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee3.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Columbia Castillo </p>
                    <p className="gridFontPrice"> 27,80$/500g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid4">
            <Link href="/4">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee4.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Ethopian Shakiso</p>

                    <p className="gridFontPrice">35,20$/500g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid5">
            <Link href="/5">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee5.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>House Blend</p>
                    <p className="gridFontPrice">23,10$/500g</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="grid6">
            <Link href="/6">
              <a>
                <div className="gridItemContainer">
                  <img src="coffee6.png" alt="Logo" width="250" />
                  <div className="gridItemContainerInfo">
                    <p>Guatemala Nango</p>
                    <p className="gridFontPrice">31,50$/500g</p>
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
