const parser = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];
  
  return bookElements.map(book => ({
    image: book.querySelector('.image_container > a > img').src,
    rating: book.querySelector('.star-rating').classList.item(1),
    title: book.querySelector('h3  a').getAttribute('title'),
    price: book.querySelector('.product_price > .price_color').textContent,
    available: book.querySelector('.product_price > .instock .icon-ok') ? true : false

 

  }));





};

module.exports = parser;
