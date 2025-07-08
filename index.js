const pool = require('./db');

async function setup() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);
}

async function insertUser(name) {
  const result = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
  return result.rows[0];
}

async function getUsers() {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
}

module.exports = { setup, insertUser, getUsers };
