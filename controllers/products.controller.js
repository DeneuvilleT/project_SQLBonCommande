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
            status: "Statut",
            data: result.result,
         });

      } catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   });

   app.get("/:id", async (req, res) => {
      let id = req.params.id;
      try {
         const result = await productModel.getOneProduct(id);

         res.render("template", {
            template: "article",
            h1: "Bons de commande",
            title: "Bon de commande n°"+ id,
            col1: "Produit",
            col2: "Prix Unitaire",
            col3: "Quantité",
            col4: "Prix Total",
            data: result.result,
            data2: result.result2,
            data3: result.result3
         })
         
      } catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   })
};



