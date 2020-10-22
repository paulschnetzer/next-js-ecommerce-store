import Link from 'next/link';
import { textArray } from '../pages/payment';
export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "20px 40px",
        background: 'rgb(17, 18, 19)',
        color: 'whitesmoke',

      }}
    >
      <Link href="/">
        <a >
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgb(16, 79, 33)',
              margin:"-50px 0px 0px 100px",
              padding:"100px 30px 30px 30px",
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
          <div className="NavLinks"  data-cy="nav-home">HOME</div>
        </a>
      </Link>
      <Link href="/checkout">
        <a
          style={{
            color:'whitesmoke',
            fontSize: '80%',
            width: '7%',
            textAlign: 'center',
          }}

        >
          <div className="NavLinks">CHECKOUT</div>
        </a>
      </Link>
      <Link href="/">
        <a
          style={{
            color: 'whitesmoke',
            fontSize: '80%',
            width: '6%',
            textAlign: 'center',
          }}

          >
          <div className="NavLinks">ABOUT US</div>
        </a>
      </Link>

        <Link href="/payment" >
          <a style={{
          marginRight: 100,
        }}>
            <img src="/shopping-cart.svg" alt="Shopping cart" width="40" />
            <div
        style={{
          display:"inline",
          padding: "5px",
          backgroundColor: 'whitesmoke',
          opacity:"80%",
          color:'rgb(17, 18, 19)',
          borderRadius:"5px",
          fontSize:"50%",
          fontWeight:"bolder"

        }}
      >
        {textArray}
      </div>
          </a>
        </Link>



    </header>
  );
}
