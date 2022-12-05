// const express = require("express");
// const fs = require("fs").promises;
// const moment = require("moment")  /// for date formating
// const cors = require("cors");



// const app = express()  /// create server

// const corsMiddleware = cors();
// // app.use(corsMiddleware)
// app.use(cors())

// const contacts = require("./db/contacts.json");

// app.set() // настройка сервера

// app.get("/products", (req, res) => {
//     res.json([])
// });

// app.get("/contacts", (req, res) => {
//     res.json(contacts)
// })

// app.use(async (req, res, next) => { /// use for midlewars
//     const { method, url } = req;
//     const date = moment().format("YYYY-MM-DD_hh:mm:ss");
//     await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
//     next()
    
// })



// app.use((req, res, next) => {  // если не указывать первым аргументом путь то для всех запросов
//     console.log(" midleware");
//     res.status(404).json({
//         message: "not found"
//     })
//     next() // для того что бы передать управление следующим функциям в express
// });


// //////////////////////////////////////////////////////////////////////
// // app.get("/contacts", (req, res) => {
// //     res.json(contacts)  /// для отправки json формата
// // })
// /////////////////////////////////////////////////////////////////////////
// // app.get("/", (req, res) => {

// //     res.send("<h2>Home Page</h2>") /// можно предавать строку или обьект
// // });

// // app.get("/contacts", (req, res) => {

// //     res.send("Contacts Page")
// // })

// app.listen(3000, () => console.log("Server is running at port 3000")) ///run server