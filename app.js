import { fileURLTopPath } from "url";
import path from "path";
import express from "express";
import mysql from "promise-mysql";
import productsController from "./controllers/products.controller.js";

const app = express();
const __filename = fileURLTopPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')))
app.set('views', './views');
app.set('view engine', "ejs");


mysql.createConnection({
   host: "localhost",
   database: "classic_model",
   user: "root",
   password: "",

}).then(dataBase => {
   console.log(`connected to : ${dataBase.config.database}`);
   setInterval(() => {
      test = dataBase.query("SELECT 1")
   }, 10000);

   productsController(app, dataBase)

}).catch(err => {
   console.error(err);
})




app.get("/", (request, response) => {
   const data = test;
   // response.json({
   //    status: 200,
   //    msg: "Bienvenue dans mon app !"
   // })
   response.render("home", { name: data });
})


app.get("/", (request, response) => {
   const data = test;
   // response.json({
   //    status: 200,
   //    msg: "Bienvenue dans mon app !"
   // })
   response.render("home", { name: data });
})





const PORT = 9000;

app.listen(PORT, () => {
   console.log(`listening at : http://localhost:${PORT}`);
})