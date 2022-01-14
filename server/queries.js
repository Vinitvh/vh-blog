const Pool = require("pg").Pool;

const pool = new Pool({
  user: "vinitvh",
  host: "localhost",
  database: "api",
  password: "root1234",
  port: 5432,
});

const getArticles = (req, res) => {
  pool.query("SELECT * FROM articles ORDER BY id ASC", (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const createArticle = (req, res) => {
  const { title, description } = req.body;
  pool.query(
    "INSERT INTO articles(title, description) VALUES ($1, $2)",
    [title, description],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).send(`Article added  `);
    }
  );
};

module.exports = {
  getArticles,
  createArticle,
};
