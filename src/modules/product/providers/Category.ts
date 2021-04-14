import { Injectable, ExecutionContext } from 'graphql-modules';
import { ApolloError, ForbiddenError } from 'apollo-server-errors';

import { ProductModule } from '../types';
@Injectable()
export class CategoryProvider {
  @ExecutionContext()
  private context: ExecutionContext;

  async getCategory(id: string): Promise<ProductModule.Category> {
    try {
      const category = await this.context.prisma.category.findUnique({ where: { id } });
      return category!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getCategoryByProduct(productId: string): Promise<ProductModule.Category> {
    try {
      const category = await this.context.prisma.product.findUnique({ where: { id: productId } }).category();
      return category!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getCategorys(storeId: string): Promise<ProductModule.Category[]> {
    try {
      return this.context.prisma.category.findMany({
        where: {
          storeId,
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createCategory(category: ProductModule.CategoryInput): Promise<ProductModule.Category> {
    try {
      const { name, description, storeId } = category;
      return await this.context.prisma.category.create({
        data: {
          name,
          description,
          store: { connect: { id: storeId } },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateCategory(id: string, updatedCategory: ProductModule.CategoryInput): Promise<ProductModule.Category> {
    try {
      const { name, description } = updatedCategory;

      return await this.context.prisma.category.update({
        where: { id },
        data: {
          name,
          description,
        },
      });
    } catch (e) {
      throw new ApolloError(e);
    }
  }

  async deleteCategory(id: string): Promise<boolean> {
    try {
      return await !!this.context.prisma.category.delete({ where: { id } });
    } catch (e) {
      throw new ApolloError(e);
    }
  }
}

export default CategoryProvider;
