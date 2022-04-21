let db;

export default (_db) => {
   db = _db;
   return ProductModel;
};

class ProductModel {
   static async getAllProducts() {
      try {
         const thing = await db.query("SELECT orderNumber, orderDate, shippedDate, status FROM orders");
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

   static async getOneProduct(id) {
      try {
         const quest = await db.query('SELECT * FROM orderdetails INNER JOIN products ON orderdetails.productCode = products.productCode WHERE orderNumber = ?', [id]);
         const quest2 = await db.query('SELECT * FROM orders INNER JOIN customers ON orders.customerNumber = customers.customerNumber WHERE orderNumber = ?', [id]);
         const quest3 = await db.query('SELECT SUM(quantityOrdered * priceEach) FROM orderdetails INNER JOIN products ON orderdetails.productCode = products.productCode WHERE orderNumber = 10100');

         return {
            status: 200,
            result: quest,
            result2: quest2,
            result3: quest3,
         }
      } catch (err) {
         return {
            status: 500,
            result: err.sqlMessage,
         }
      }
   }
}