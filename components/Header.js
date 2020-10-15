import Link from 'next/link';
import { textArray } from '../pages/payment';
export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        background: 'rgb(17, 18, 19)',
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
              marginTop: -50,
              marginLeft: 100,
              paddingBottom: 30,
              paddingTop: 100,
              paddingLeft: 30,
              paddingRight: 30,
              position: 'absolute',
              borderRadius: '0px 0px 60px 60px ',
              boxShadow: '-18px 63px 103px 13px rgba(255,255,255,0.23)',
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
      <a
        style={{
          color: 'white',
          marginRight: '-70px',
          marginLeft: '50px',
        }}
      >
        {textArray}
      </a>
      <div
        style={{
          marginRight: 100,
        }}
      >
        <Link href="/payment">
          <a>
            <img src="/shopping-cart.svg" alt="Shopping cart" width="40" />
          </a>
        </Link>
      </div>
    </header>
  );
}
