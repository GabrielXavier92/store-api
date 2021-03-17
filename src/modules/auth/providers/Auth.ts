import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserInputError } from 'apollo-server-errors';
import { Injectable, ExecutionContext } from 'graphql-modules';
import { AuthModule } from '../types';

@Injectable()
export class AuthProvider {
  @ExecutionContext()
  private context: ExecutionContext;

  async createUser(data: AuthModule.SignUpInput): Promise<AuthModule.Auth> {
    const { email, password } = data;

    const user = await this.context.prisma.user.findFirst({ where: { email } });
    if (user) throw new UserInputError('Failed to create account');

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser: AuthModule.SignUpInput = {
      ...data,
      password: hashPassword,
    };

    const createdUser = await this.context.prisma.user.create({ data: newUser });
    const token = await this.generateToken(createdUser.id);

    return {
      token,
    };
  }

  async logIn(data: AuthModule.SignInInput): Promise<AuthModule.Auth> {
    const { email, password } = data;
    const user = await this.context.prisma.user.findFirst({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) throw new UserInputError('Failed to login');

    const token = await this.generateToken(user.id);

    return {
      token,
    };
  }

  async generateToken(id: string): Promise<string> {
    const userClinics = await this.context.prisma.userOnClinic.findMany({
      where: {
        userId: id,
      },
    });

    const token = jwt.sign({ id, clinics: userClinics }, process.env.JWT_SECRET as string, {
      expiresIn: '7days',
    });

    return token;
  }
}

export default AuthProvider;
