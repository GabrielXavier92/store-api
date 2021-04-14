import * as mongoose from 'mongoose';

export interface UserModel extends mongoose.Document {
  fullName: String;
  email: String;
  password: Number;
  createdAt: Date;
  modifiedAt: Date;
}

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    required: false,
  },
  modifiedAt: {
    type: Date,
    required: false,
  },
});

export default mongoose.model<UserModel>('User', UserSchema);

// import { IUser } from './user.model';

// export interface IPet extends Document {
//   name: string;
//   owner: IUser['_id'];
// }

// const PetSchema: Schema = new Schema({
//   name: { type: String, required: true },
//   owner: { type: Schema.Types.ObjectId, required: true }
// });

// export default mongoose.model<IPet>('Pet', PetSchema);
