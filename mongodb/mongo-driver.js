import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1");
await client.connect();

const db = client.db("mongodb_nodeJs");
const userCollection = db.collection("users");

//! write / Create
// userCollection.insertOne({ name: "Dharmesh Yadav", age: 21, dream: "be rich" });

// userCollection.insertMany([.
//   { name: "Dheeraj", age: 21, dream: "independent" },
//   { neme: "Dharmesh", age: 21, dream: "clear SSC-tech" },
//   { name: "DharmaBhai", age: 21, dream: "Billionare" },
// ]);

// if not commented then it will run again & again ..

//! Read
// const userCursor = userCollection.find();
// console.log(userCursor);

// for await (const user of userCursor) {
//   console.log(user);
// }

// const user = await userCollection.find().toArray();
// console.log(user);
// console.log(user[0]._id);
// console.log(user[0]._id.toHexString());

//! Update
// const userUpdate = await userCollection.updateOne(
//   { _id: new ObjectId("68f9d8ffd5284c1a5e4cb38f") },
//   { $set: { age: 31 } }
// );
// console.log(userUpdate);
// if it not matches sometime then try with adding unique id of it
// else try this
// await userCollection.updateOne({ name: "Dheeraj" }, { $set: { age: 21 } });
// .updateMany is also available

//! Delete
const res = await userCollection.deleteOne({ name: "DharmaBhai" });
console.log(res);
console.log(res.deletedCount);
