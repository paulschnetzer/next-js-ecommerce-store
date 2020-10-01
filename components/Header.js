import Link from 'next/link';
export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background: '#190000',
        borderBottom: '2px solid white',

        color: 'whitesmoke',
      }}
    >
      <Link href="/users">
        <a>
          <div>
            <img src="/logo.svg" alt="Logo" width="40" height="40" />
          </div>
        </a>
      </Link>
      <div
        style={{
          fontSize: 50,
          letterSpacing: 1.8,
          marginTop: '-10px',
          padding: 0,
          fontFamily: 'Vollkorn SC',
          borderBottom: '2px white solid',
        }}
      >
        Roasteria
      </div>
      <div>
        <a
          style={{
            color: 'white',
          }}
        >
          1
        </a>

        <Link href="/users/user-list">
          <a>
            <img
              src="/shopping-cart.svg"
              alt="Girl in a jacket"
              width="40"
              height="40"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}
