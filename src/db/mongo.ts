import * as mongoose from 'mongoose';

const ConnectMongoDb = () => {
  mongoose
    .connect(process.env.MONGO_URL as string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.info('Successfully connected to MongoDB'))
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    });
};

export default ConnectMongoDb;
