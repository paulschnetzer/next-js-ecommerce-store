import Link from 'next/link';
export default function Header(props) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background: '#190000',
        color: 'whitesmoke',
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <Link href="/">
        <a>
          <div
            style={{
              backgroundColor: 'rgb(16, 79, 33)',
              marginTop: -30,
              marginLeft: 40,
              paddingBottom: 30,
              paddingTop: 90,
              paddingLeft: 30,
              paddingRight: 30,
              position: 'absolute',
              borderRadius: '0px 0px 60px 60px ',
            }}
          >
            <img src="/logo.svg" alt="Logo" width="230" />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a
          style={{
            color: 'white',
            marginTop: 15,
            marginLeft: '50%',
            fontSize: '80%',

            width: '4.5%',
            textAlign: 'center',
            paddingBottom: '-50px',
          }}
        >
          <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
            HOME
          </div>
        </a>
      </Link>
      <Link href="/checkout">
        <a
          style={{
            color: 'white',
            marginTop: 15,
            fontSize: '80%',
            width: '7%',
            textAlign: 'center',
          }}
        >
          <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
            CHECKOUT
          </div>
        </a>
      </Link>
      <Link href="/">
        <a
          style={{
            color: 'white',
            marginTop: 15,
            fontSize: '80%',
            width: '6%',
            textAlign: 'center',
          }}
        >
          <div style={{ borderBottom: '2px white solid', paddingBottom: 5 }}>
            ABOUT US
          </div>
        </a>
      </Link>
      <div
        style={{
          marginRight: 15,
        }}
      >
        <a
          style={{
            color: 'white',
          }}
        >
          1
        </a>

        <Link href="/payment">
          <a>
            <img
              src="/shopping-cart.svg"
              alt="Shopping cart"
              width="50"
              height="50"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}
