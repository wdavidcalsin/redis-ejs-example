import User, { IUser } from '../models/user.model';
import { CreateQuery } from 'mongoose';

async function CreateUser({
  user,
  password,
}: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    user,
    password,
  })
    .then((data: IUser) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function AllUser() {
  let allData = User.find({}, (err, users) => {
    return { users: users };
  });

  return allData;
  // console.log('allUser');
}

async function RemoveUser(id: any): Promise<void> {
  await User.deleteOne({ _id: id });
}

async function DeleteAllUser(): Promise<String> {
  return 'Suucces Delete All';
}

export default {
  CreateUser,
  AllUser,
  RemoveUser,
};
