const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'Mwana wa Africa',
  password: 'admin',
  port: 5432,
});

app.get('/api/data', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM your_table');
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
