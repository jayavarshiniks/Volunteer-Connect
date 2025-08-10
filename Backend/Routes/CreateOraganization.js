import express from 'express';
import Organization from '../models/organizermodel.js';

const router = express.Router();

router.post('/createorganizer', async (req, res) => {
    try {
        await Organization.create({
            organization_name: "Clean Bhart",
            password: "123456",
            email: "bhart@hotmail.com",
            locations: ["Qwerty drfref"]
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

export default router;     
