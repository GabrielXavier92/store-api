import * as mongoose from 'mongoose';

export interface PurchaseModel extends mongoose.Document {
  id: string;
  total: number;
  paymentForm: string;
  products: [
    {
      _id: string;
      name: string;
      value: number;
      quantity: number;
    },
  ];
  store: {
    _id: string;
    storeName: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    address: string;
    number: string;
    complemente: string;
  };
  buyerData: {
    name: string;
    celphone: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    address: string;
    number: string;
    complement: string;
  };
}

const PurchaseSchema = new mongoose.Schema({
  total: { type: Number, required: true },
  paymentForm: { type: String, required: true },
  products: [
    {
      _id: { type: String, require: true },
      name: { type: String, required: true },
      value: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  store: {
    _id: { type: String, require: true },
    storeName: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    complemente: { type: String },
  },
  buyerData: {
    name: { type: String, required: true },
    celphone: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String },
  },
});

export default mongoose.model<PurchaseModel>('Purchase', PurchaseSchema);
