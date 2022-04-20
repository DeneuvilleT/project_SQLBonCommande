import ProductModel from '../models/products.model.js';

export default (app, db) => {
   const productModel = ProductModel(db);
   app.get("/api/v1/products/all", async (req, res) => {
      try {
         const resutlt = await productModel.getAllProducts();
         res.json({
            resutlt: resutlt
         })
         console.log(resutlt);
      } catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   });

   app.get("/api/v1/products/one/:id", async (req, res) => {
      let id = req.params.id;
      try {
         const result = await productModel.getOneProducts(id);
         res.json({
            result: result,
         })
         console.log(result);
      }catch (error) {
         console.log('ERROR CONTROLLER =>', error);
      }
   })
};