import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import mysql from "promise-mysql";
import productsController from "./controllers/products.controller.js";



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.static(path.join(__dirname + '/public')))
app.set('views', './views');
app.set('view engine', "ejs");


mysql.createConnection({
   host: "localhost",
   database: "classic_model",
   user: "root",
   password: "",
}).then(db => {
   console.log(`connected to : ${db.config.database}`);
   productsController(app, db)
   setInterval(() => {
      let test = db.query("SELECT 1")
   }, 10000);
}).catch(err => {
   console.error(err);
})


const PORT = 9000;

app.listen(PORT, () => {
   console.log(`listening at : http://localhost:${PORT}`);
})