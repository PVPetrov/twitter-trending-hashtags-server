import { Router } from 'express';
import { getTrendsByCountry } from '../controllers/getTrends';

const router = Router();

router.get('/trending/', getTrendsByCountry);

export default router;