import mongoose, { mongo } from "mongoose";

try {
  await mongoose.connect("mongodb://127.0.0.1/mongoose_middleware");
  mongoose.set("debug", true);
} catch (error) {
  console.log(error);
  process.exit();
}

const urlSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

//! we will use middleware before model
urlSchema.pre(["updateOne", "updateMany", "findOneAndUpdate"], function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

const Users = mongoose.model("user", urlSchema);

// await Users.create({
//   name: "Dharmesh",
//   email: "yadavDharmesh@gmail.com",
//   age: 10,
// });

await Users.updateOne(
  { email: "yadavDharmesh@gmail.com" },
  { $set: { age: 20 } }
);

await mongoose.connection.close();
