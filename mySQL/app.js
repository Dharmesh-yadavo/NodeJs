import mysql from "mysql2/promise";

// 1: to connect to mysql server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dharmesh@23",
  database: "mysql_db_new",
});
console.log("mySQL connected successfully");

// 2: we need to create a db
// await db.execute(`create database mysql_db_new`);
// console.log(await db.execute("show databases"));

// 3: then we need to create a table
// await db.execute(`
//     CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
// )
// `);

// 4: is to perform CURD operation
//! Insert
//~ Using inline values ( not recommended )
// await db.execute(
//   `insert into users(name, email) values("Dharmesh", "yadavDharmesh@gmail.com")`
// );

//~ Using prepared statements ( Best practice )
// await db.execute(`insert into users(name, email) values(?, ?)`, [
//   "Dharm",
//   "dharm@gmail.com",
// ]);

// const values = [
//   ["alice", "alice@gmail.com"],
//   ["rony", "rony@gmail.com"],
//   ["jai", "jai@gmail.com"],
//   ["deepak", "deepak@gmail.com"],
//   ["mohit", "mohit@gmail.com"],
// ];

// await db.query(`insert into users(name, email) values ?`, [values]);

//! Read
// const [rows] = await db.execute(`select * from users`); // [rows, field]
// console.log(rows);

// console.log(await db.execute(`select * from users where id = 2`));

//! Update
// try {
//   const [rows] = await db.execute(`
// update users
// set email = "don@yadav.com", name = "don"
// where id = 3`);
//   console.log("All users ", rows);
// } catch (error) {
//   console.log(error);
// }

//~
// try {
//   const [rows] = await db.execute(
//     `
// update users set email = ?, name = ? where id = ?`,
//     ["don@yadav.com", "donJi", 3]
//   );
//   console.log("All users ", rows);
// } catch (error) {
//   console.log(error);
// }

// console.log(await db.execute(`select * from users `));

//! Delete
// try {
//   const [rows] = await db.execute(`delete
//  from users
//  where id = 2`);
//   console.log(rows);
// } catch (error) {
//   console.log(error);
// }

console.log(await db.execute(`select * from users `));
// console.log(await db.execute(`select * from users where id = 2`));
