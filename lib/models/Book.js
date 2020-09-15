const pool = require('../utils/pool');

class Books {

    id;
    image;
    rating;
    title;
    price;
    available;

    constructor(row) {

      this.id = row.id;
      this.image = row.image;
      this.rating = row.rating;
      this.title = row.title;
      this.price = row.price;
      this.available = row.available;
    }

    static async insert(book) {
      const { rows } = await pool.query(
        `INSERT INTO books (image, rating, title, price, available)
            VALUES ($1, $2, $3, $4, $5) RETURNING * `,
        [book.image, book.rating, book.title, book.price, book.available]


      );
      return new Books(rows[0]);
    }




}

module.exports = Books;
