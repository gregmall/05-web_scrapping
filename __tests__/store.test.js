const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  it('takes an array of books and saves them in the database', async() => {
    const books = [
      {
        image: '../media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
        rating: 3,
        title: 'A Light in the Attic',
        price: '£51.77',
        available: true
      },
      {
        image: '../media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg',
        rating: 1,
        title: 'Tipping the Velvet',
        price: '£53.74',
        available: true
      },
      {
        image: '../media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg',
        rating: 1,
        title: 'Soumission',
        price: '£50.10',
        available: true
      }

    ];
    await store(books);
    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(3);
  });

});
