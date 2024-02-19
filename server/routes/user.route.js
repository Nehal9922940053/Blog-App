import express from 'express';
import { UserController, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',UserController);
router.put('/update/:userId',verifyToken,updateUser);

export default router;