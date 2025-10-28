import { PrismaClient } from "./src/generated/client.js";

const prisma = new PrismaClient();

const main = async () => {
  //! Create ( Insert Docs )
  //~ Single user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Dharmesh",
  //     email: "yadavdharmesh@gmail.com",
  //   },
  // });
  // console.log(user);
  //~ Multiple user
  // const newUser = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Dharm",
  //       email: "dharm@gmail.com",
  //     },
  //     {
  //       name: "Dheeraj",
  //       email: "dheeraj23@gmail.com",
  //     },
  //   ],
  // });
  // console.log(newUser);
  //! Read (fetch data)
  //~ get all users
  // const user = await prisma.user.findMany();
  // console.log(user);
  //~ get a single user by ID
  // const user = await prisma.user.findUnique({
  //   where: { id: 1 },
  // });
  // console.log(user);
  //! Update (Modify Data)
  //~ Update one user
  // const upadteUser = await prisma.user.update({
  //   where: { id: 4 },
  //   data: { email: "dharm23@gmail.com" },
  // });
  // console.log(upadteUser);
  //!
  // const upadteUser = await prisma.user.update({
  //   where: { email: "dharm23@gmail.com" },
  //   data: { name: "dharmender" },
  // });
  // console.log(upadteUser);
  //* update can be used only where model is default or unique
  //~ Update multiple user
  //* while in case of updateMany u can use other also
  //! Delete (Remove data)
  //~ Delete one user
  // const deletedUser = await prisma.user.delete({
  //   where: { id: 1 },
  // });
  // console.log(deletedUser);
  //~ Delete multiple users
  // const deletedUser = await prisma.user.delete({
  //   where: [{ id: 1 }, { id: 4 }, { id: 5 }],
  // });
  // console.log(deletedUser);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
