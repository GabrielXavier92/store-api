import { Injectable, ExecutionContext, Inject } from 'graphql-modules';
import { AuthenticationError, ApolloError, ForbiddenError } from 'apollo-server-errors';

import { StoreModule } from '../types';
import { plans } from '../constants';
import { AuthProvider } from '../../auth/providers';
@Injectable()
export class StoreProvider {
  constructor(@Inject(AuthProvider) private auth: AuthProvider) {}

  @ExecutionContext()
  private context: ExecutionContext;

  async getStore(id: string): Promise<StoreModule.Store> {
    try {
      const store = await this.context.prisma.store.findUnique({ where: { id } });
      return store!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getStores(): Promise<StoreModule.Store[]> {
    try {
      return this.context.prisma.store.findMany({
        where: {
          UserOnStore: {
            some: { userId: this.context.user?.id },
          },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createStore(store: StoreModule.StoreInput): Promise<StoreModule.CreatedStore> {
    let newStore;
    if (this.context.user?.id) {
      newStore = {
        ...store,
        ownerId: this.context.user?.id,
        plan: store.plan || plans.starter,
      };
      const createdStore = await this.context.prisma.store.create({ data: newStore });
      await this.createUserOnStore(createdStore.ownerId, createdStore.id, 'ADMIN');

      const token = await this.auth.generateToken(createdStore.ownerId);

      return {
        store: createdStore,
        token,
      };
    }

    throw new AuthenticationError('Unnable to create Store');
  }

  async createUserOnStore(userId: string, storeId: string, role: string): Promise<boolean> {
    try {
      await this.context.prisma.userOnStore.create({
        data: {
          userId,
          storeId,
          role,
        },
      });
      return true;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateStore(id: string, updatedStore: StoreModule.StoreInput): Promise<StoreModule.Store> {
    try {
      return this.context.prisma.store.update({
        where: { id },
        data: updatedStore,
      });
    } catch (e) {
      throw new ApolloError(e);
    }
  }
}

export default StoreProvider;
