import express from 'express';
import { CreateOrganization, CreateVolunteer } from '../controller/UserController.js';

const router = express.Router();

router.post('/createuser',CreateVolunteer);
router.post('/createorganizer', CreateOrganization);

export default router;     
