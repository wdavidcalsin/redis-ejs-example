import User, { IUser } from '../models/user.model';
import mongoose, { CreateQuery, Types, mongo } from 'mongoose';
import { ObjectId } from 'mongodb';

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

async function RemoveUser(id: string): Promise<any> {
  const query = User.deleteOne({
    // _id: Types.ObjectId.createFromHexString('6080e369eb801508bd659068'),
    _id: Types.ObjectId.createFromHexString(id),
  });

  // console.log(query);

  return query;
}

async function DeleteAllUser(): Promise<String> {
  return 'Suucces Delete All';
}

export default {
  CreateUser,
  AllUser,
  RemoveUser,
};
