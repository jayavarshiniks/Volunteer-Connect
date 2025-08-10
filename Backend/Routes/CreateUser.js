import express from 'express';
import User from '../models/usermodel.js';

const router = express.Router();

router.post('/createuser', async (req, res) => {
    try {
        await User.create({
            name: "Shyam Das",
            password: "123456",
            email: "shyamdas12@hotmail.com",
            locations: ["Qwerty drfref"]
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

export default router;     
