import mongoose from "mongoose";
import "../server/loadEnviroment.js";

export const connectDb = async (mongoUrl: string) => {
  await mongoose.connect(mongoUrl);

  mongoose.set("toJSON", {
    virtuals: true,
    transform(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });
};
