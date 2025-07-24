
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://jainamkp12:xpuMnj90nbSeJtZp@moreinfo.ofvf1.mongodb.net/?retryWrites=true&w=majority&appName=moreInfo";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export const connectToDatabaseIIM = async()=> {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);



import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.DATABASE_URI as string;

export const connectToDatabaseIIM = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Successfully connected to MongoDB!");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
};
