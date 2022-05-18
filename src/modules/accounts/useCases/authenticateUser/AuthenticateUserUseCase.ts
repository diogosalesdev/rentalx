/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IUsersRepositoryDTO } from '../../dtos/IUsersRepositoryDTO';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string;
		email: string;
	};
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(@inject('UsersRepository') private usersRepository: IUsersRepositoryDTO) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		// Usuário existe
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new Error('Email or password invalid');
		}

		const passwordMatch = await compare(password, user.password);

		// Senha está correta
		if (!passwordMatch) {
			throw new Error('Email or password invalid');
		}

		// Gerar jsonwebtoken
		const token = sign({}, '58657ed3d22b341df2d7f133f8a22279', {
			subject: user.id,
			expiresIn: '1d'
		});

		return {
			user,
			token
		};
	}
}

export { AuthenticateUserUseCase };
