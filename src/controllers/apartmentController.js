import { getAllApartments } from "../repositories/apartmentRepository.js";
import { createApartment } from "../repositories/apartmentRepository.js";

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

export async function postApartments(req, res) {
    try{
        const apartmentData = req.body;

        const newApartment = await createApartment(
            apartmentData
        );
        return res.status(201).json(newApartment);
    } catch (error){
        console.error(error);
        return res.status(500).json({
            error: 'Failed to create apartment'
        });
    }
}