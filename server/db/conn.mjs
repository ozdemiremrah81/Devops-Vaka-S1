import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://ozdemiremrah81:CXudzbhhebZjvJTT@emongo1.nkcxp.mongodb.net/?retryWrites=true&w=majority&appName=emongo1";
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    db = client.db("sample_training");
    console.log("Successfully connected to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    process.exit(1); // Exit the process with an error code
  }
}

await connectToDatabase();

export default db;