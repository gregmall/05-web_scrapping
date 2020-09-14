const request = require('../lib/request');

describe('request function', () => {
  it('makes a request to the Books to Scrape page and returns html', async() => {
    const document = await request();
    expect(document.querySelector('.row h1').textContent).toEqual('All products');

  });
});
