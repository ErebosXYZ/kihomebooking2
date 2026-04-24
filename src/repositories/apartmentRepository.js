import pool from '../db/db.js';

export async function getAllApartments() {
  const result = await pool.query(`
    SELECT * FROM apartments
    ORDER BY id DESC
  `);

  return result.rows;
}

export async function createApartment(apartmentData) {
  const { title, price, square_meters, main_photo } = apartmentData;
  const result = await pool.query(`
    INSERT INTO apartments(
    title,
    price,
    square_meters,
    main_photo
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [
      title,
      price,
      square_meters,
      main_photo,
    ]
  );

  return result.rows[0];
}