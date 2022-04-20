import ProductModel from '../models/products.model.js';


export default (app, db) => {

   const productModel = ProductModel(db);
   app.get("/", async (req, res) => {
      try {
         const result = await productModel.getAllProducts();

         res.render("template", {
            template: "home",
            h1: "Bons de commande",
            title: "Liste des commandes",
            col1: "Commande",
            col2: "Date de la commande",
            col3: "Date de livraison",
            status: "Status",
            data: result.result,
         });


      } catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   });

   app.get("/api/v1/products/one/:id", async (req, res) => {
      let id = req.params.id;
      try {
         const result = await productModel.getOneProduct(id);
         // res.json({
         //    result: result,
         // })
      } catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   })
};



