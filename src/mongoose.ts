import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true })
      .then(() => {
        return console.log(`Successfully connected to BD`);
      })
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
