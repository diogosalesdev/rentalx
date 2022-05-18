/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
import { Router } from 'express';
import { authenticateRoues } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoues);

export { router };
