import express from 'express';
import pool from './db/db.js';
import { initDatabase } from './db/initDb.js';
import apartmentRoutes from './routes/apartmentRoutes.js';

const app = express();

app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Database connection failed',
        });
    }
});

app.use('/apartments', apartmentRoutes);


async function startServer() {
    await initDatabase();
    app.listen(3000, () => {
    console.log("🚀 ~ 'Server running on port 3000':", 'Server running on port 3000')
});
}

startServer();