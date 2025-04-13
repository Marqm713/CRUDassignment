const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2151',       
  database: 'ebook_db'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// GET all reviews
app.get('/api/reviews', (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST new review
app.post('/api/reviews', (req, res) => {
  const { name, role, rating, comment, avatar } = req.body;
  db.query(
    'INSERT INTO reviews (name, role, rating, comment, avatar) VALUES (?, ?, ?, ?, ?)',
    [name, role, rating, comment, avatar || 'https://via.placeholder.com/100'],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, role, rating, comment, avatar });
    }
  );
});

// PUT update review
app.put('/api/reviews/:id', (req, res) => {
  const { name, role, rating, comment, avatar } = req.body;
  const id = req.params.id;
  db.query(
    'UPDATE reviews SET name = ?, role = ?, rating = ?, comment = ?, avatar = ? WHERE id = ?',
    [name, role, rating, comment, avatar, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Review updated', id });
    }
  );
});

// DELETE review
app.delete('/api/reviews/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM reviews WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Review deleted' });
  });
});

app.listen(PORT, () => {
  console.log(`Review API running on http://localhost:${PORT}`);
});
