import mongoose from "mongoose";

const connectdb = async (req, res) => {
  try {
    if (!process.env.MONGO_URI) {
      return console.log("MONGO_URI is not accesible");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectdb
