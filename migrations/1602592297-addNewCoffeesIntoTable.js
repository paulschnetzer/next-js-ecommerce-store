const coffeeTypes = [
  {
    id: '1',
    name: 'Columbia Tolima',
    price: 3.5,
    image: 'coffee1.png',
  },
  {
    id: '2',
    name: 'Columbia Ruiz',
    price: 2.9,
    image: 'coffee2.png',
  },
  {
    id: '3',
    name: 'Columbia Castillo',
    price: 3.8,
    image: 'coffee3.png',
  },
  {
    id: '4',
    name: 'Ethopian Shakiso',
    price: 3.2,
    image: 'coffee4.png',
  },
  {
    id: '5',
    name: 'House Blend',
    price: 3.1,
    image: 'coffee5.png',
  },
  {
    id: '6',
    name: 'Guatemala Nango',
    price: 4.5,
    image: 'coffee6.png',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO coffees ${sql(coffeeTypes, 'name', 'price', 'image')}
  `;
};

exports.down = async (sql) => {
  await sql`
	DELETE * FROM coffees;`;
};
