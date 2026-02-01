import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { recommendJobs } from '../controllers/recommendation.controller.js';

const router = express.Router();

router.route('/get').get(isAuthenticated,recommendJobs);


export default router;