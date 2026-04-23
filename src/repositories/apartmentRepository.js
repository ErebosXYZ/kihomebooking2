import pool from '../db/db.js';

export async function getAllApartments() {
  const result = await pool.query(`
    SELECT * FROM apartments
    ORDER BY id DESC
  `);

  return result.rows;
}