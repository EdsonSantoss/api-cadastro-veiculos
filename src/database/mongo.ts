import mongoose from "mongoose";

export const MongoConnect = {
  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "localhost:27017";

    mongoose.connect(url);

    console.log("MongoDb conectado!");
  },
};
