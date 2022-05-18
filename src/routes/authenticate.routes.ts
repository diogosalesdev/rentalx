/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { AutheticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoues = Router();

const authenticateUserController = new AutheticateUserController();

authenticateRoues.post('/sessions', authenticateUserController.handle);

export { authenticateRoues };
