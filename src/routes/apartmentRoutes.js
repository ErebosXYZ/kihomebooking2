import express from 'express';

import { getApartments, postApartments } from '../controllers/apartmentController.js';

const router = express.Router();

router.get('/', getApartments);
router.post('/', postApartments);

export default router;