import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  user: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);
