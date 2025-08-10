import Organization from '../models/organizermodel.js';
import User from '../models/usermodel.js';

export const CreateVolunteer = async (req, res) => {
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
}

export const CreateOrganization = async (req, res) => {
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
}