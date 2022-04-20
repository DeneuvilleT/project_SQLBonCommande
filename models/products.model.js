let db;

export default (_db) => {
   db = _db;
   return ProductModel;
};

class ProductModel{
   static async getAllProducts() {
      try {
         const thing = await db.query("SELECT productVendor, (SUM(buyPrice)/LENGTH('MSRP')) FROM products GROUP BY productVendor DESC");
         return {
            status: 200,
            result: thing,
         }
      } catch (err) {
         return {
            status: 500,
            result: err.sqlMessage,
         }
      }
   }

   static async getOneProducts(id) {
      try {
         const quest = await db.query('SELECT * FROM orders WHERE orderNumber = ?', [id]);
         return {
            status: 200,
            result: quest,
         }
      } catch (err) {
         return {
            status: 500,
            result: err.sqlMessage,
         }
      }
   }
}