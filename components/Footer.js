export default function Footer() {
  return (
    <footer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 30,
          background: '#190000',
          color: 'whitesmoke',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',

            width: 500,
          }}
        >
          <div>
            <img
              src="/twitter.svg"
              alt="Girl in a jacket"
              width="50"
              height="50"
            />
          </div>
          <div>
            <img
              src="/facebook.svg"
              alt="Girl in a jacket"
              width="50"
              height="50"
            />
          </div>
          <div>
            <img
              src="/youtube.svg"
              alt="Girl in a jacket"
              width="50"
              height="50"
            />
          </div>
          <div>
            <img
              src="/email.svg"
              alt="Girl in a jacket"
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#190000',
          color: 'whitesmoke',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            lineHeight: 1.6,
            fontSize: 10,
            paddingBottom: 30,
          }}
        >
          Copyright 2020 <br />
          All rights reserved. Powered by Paul Schnetzer
        </p>
      </div>
    </footer>
  );
}
