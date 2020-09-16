const request = require('../lib/request');
const parser = require('../lib/parser');

describe('parser function', () => {
  it('returns an array of all book title, cover image, ratings, price and availability', async() => {
    const document = await request(1);

    const bookInfo = parser(document);
   
    
    expect(bookInfo).toEqual(expect.arrayContaining([
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

    ]));

        
  });
});
