const request = require('../lib/request');

describe('request function', () => {
  it('makes a request to the Books to Scrape page and returns html', async() => {
    const document = await request(1);
    console.log(document);
    expect(document.querySelector('.col-sm-8>a').textContent).toEqual('Books to Scrape');

  });
});
