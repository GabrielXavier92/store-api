import { Injectable, ExecutionContext } from 'graphql-modules';
import { ApolloError, ForbiddenError } from 'apollo-server-errors';

import { ProductModule } from '../types';
@Injectable()
export class ProductProvider {
  @ExecutionContext()
  private context: ExecutionContext;

  async getProduct(id: string): Promise<ProductModule.Product> {
    try {
      const product = await this.context.prisma.product.findUnique({ where: { id } });
      return product!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getProducts(storeId: string): Promise<ProductModule.Product[]> {
    try {
      return this.context.prisma.product.findMany({
        where: {
          storeId,
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createProduct(store: ProductModule.ProductInput): Promise<ProductModule.Product> {
    try {
      const { categoryId, description, name, value, storeId, weight } = store;
      return await this.context.prisma.product.create({
        data: {
          description,
          name,
          value,
          weight,
          category: { connect: { id: categoryId } },
          store: { connect: { id: storeId } },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateProduct(id: string, updatedStore: ProductModule.ProductInput): Promise<ProductModule.Product> {
    try {
      const { description, name, value, weight } = updatedStore;

      return await this.context.prisma.product.update({
        where: { id },
        data: {
          description,
          name,
          value,
          weight,
        },
      });
    } catch (e) {
      throw new ApolloError(e);
    }
  }

  async deleteProduct(id: string): Promise<boolean> {
    try {
      return await !!this.context.prisma.product.delete({ where: { id } });
    } catch (e) {
      throw new ApolloError(e);
    }
  }
}

export default ProductProvider;
