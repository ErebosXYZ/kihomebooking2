import { getAllApartments } from "../repositories/apartmentRepository.js";

export async function getApartments(req, res) {
    try {
        const apartments = await getAllApartments();
        res.json(apartments);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch apartments',
        });
    }
}