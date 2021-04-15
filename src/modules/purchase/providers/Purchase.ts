import { Injectable } from 'graphql-modules';
import { ForbiddenError } from 'apollo-server-errors';

import { PurchaseModule } from '../types';

import PurchaseSchema from '../schemas/purchase';

@Injectable()
export class PurchaseProvider {
  async getPurchase(id: string): Promise<PurchaseModule.Purchase> {
    try {
      const purchase = await PurchaseSchema.findById({ id });
      return purchase!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getPurchases(storeId: string): Promise<PurchaseModule.Purchase[]> {
    try {
      const purchases = await PurchaseSchema.find({ 'store._id': storeId });
      return purchases;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createPurchase(purchaseInput: PurchaseModule.PurchaseInput): Promise<PurchaseModule.Purchase> {
    try {
      const { store, products } = purchaseInput;

      const newStore = {
        ...store,
        _id: store.id,
      };

      const newProducts = products.map((product) => ({
        ...product,
        _id: product.id,
      }));

      const newPurchase = {
        ...purchaseInput,
        store: newStore,
        products: newProducts,
      };

      const purchase = await PurchaseSchema.create(newPurchase);
      await purchase.save();
      return purchase;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }
}

export default PurchaseProvider;
