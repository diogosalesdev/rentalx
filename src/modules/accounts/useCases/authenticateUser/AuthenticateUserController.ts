/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AutheticateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

		const token = await authenticateUserUseCase.execute({ email, password });

		return response.json(token);
	}
}

export { AutheticateUserController };
