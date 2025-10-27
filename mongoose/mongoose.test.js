import mongoose, { mongo } from "mongoose";

// step 1: to connect to the mongoDB server
try {
  await mongoose.connect("mongodb://127.0.0.1/mongoose_database");
  mongoose.set("debug", true);
} catch (error) {
  console.log(error);
  process.exit();
}

// step 2: create schema
const urlSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

// step: creating a model
const Users = mongoose.model("user", urlSchema);

await Users.create({
  name: "Dharm",
  email: "yadavDharm@gmail.com",
  age: 10,
});

await mongoose.connection.close();
