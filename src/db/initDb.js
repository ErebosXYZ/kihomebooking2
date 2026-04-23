import pool from './db.js';

export async function initDatabase() {

    try{
        console.log("🚀 ~ initDatabase ~ 'creating tables':", 'creating tables')
        await pool.query(`
        CREATE TABLE IF NOT EXISTS apartments (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL, 
        price NUMERIC(10,2),
        square_meters INTEGER,
        main_photo TEXT,
        services TEXT[]
        )
    `);
    console.log("🚀 ~ initDatabase ~ 'tables ready':", 'tables ready');
    } catch (error) {
        console.error(error);
    }
}
    