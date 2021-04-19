import mongoose from 'mongoose';

type TInput = {
  db: string;
};
export default ({ db }: TInput) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        console.log(`Successfully connected to DB`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
