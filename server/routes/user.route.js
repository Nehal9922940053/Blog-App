import express from 'express';
import { UserController } from '../controller/user.controller.js';

const router = express.Router();

router.get('/test',UserController);

export default router;