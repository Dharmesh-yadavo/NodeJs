import { eq } from "drizzle-orm";
import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  //! Insert query
  //~ single user
  //   const insertUsers = await db.insert(usersTable).values({
  //     name: "Dharmesh",
  //     age: 20,
  //     email: "yadavdharmesh2306@gmail.com",
  //   });
  //   console.log(insertUsers);
  //~ multiple user
  //   const insertUsers = await db.insert(usersTable).values([
  //     {
  //       name: "Dheeraj",
  //       age: 20,
  //       email: "dheeraj@gmail.com",
  //     },
  //     {
  //       name: "jai",
  //       age: 20,
  //       email: "jai@gmail.com",
  //     },
  //     {
  //       name: "deepak",
  //       age: 20,
  //       email: "deepak@gmail.com",
  //     },
  //   ]);
  //   console.log(insertUsers);
  //! Read query
  //   const users = await db.select().from(usersTable);
  //   const users = await db
  //     .select()
  //     .from(usersTable)
  //     .where({ email: "dheeraj@gmail.com" });
  //   console.log(users);
  //! Update query
  //   const updateUser = await db
  //     .update(usersTable)
  //     .set({ email: "dharmesh@gmail.com" })
  //     .where({ id: 1 });
  //* should be written like this
  //   const updateUser = await db
  //     .update(usersTable)
  //     .set({ email: "dharmesh23@gmail.com" })
  //     .where(eq(usersTable.id, 1));
  //   console.log(updateUser);
  //! Delete query
//   await db.delete(usersTable).where({ email: "dharmesh23@gmail.com" });
//   await db
//     .delete(usersTable)
//     .where(eq(usersTable.email, "dharmesh23@gmail.com"));
};

main().catch((err) => console.log(err));
