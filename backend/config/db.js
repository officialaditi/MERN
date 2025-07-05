import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected Successfully on ${conn.connection.host}`.magenta);
  } catch (err) {
    console.error(`Database Error: ${err.message}`.red);
    process.exit(1);
  }
};
export default connectDB;
